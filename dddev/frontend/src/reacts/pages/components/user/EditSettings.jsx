/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import eetch from 'eetch/eetch';
import { setMenu } from 'redux/actions/menu';
import { setMessage } from 'redux/actions/menu';
import { logoutUser } from 'redux/actions/user';

import { updateUser } from 'redux/actions/user';

import Input from 'reacts/pages/components/common/Input';
import GroundUsers from 'reacts/pages/components/user/GroundUsers';
import GetAlert from 'reacts/pages/components/alert/GetAlert';

import SelectTransparent from 'reacts/pages/components/common/SelectTransparent';

import * as s from 'reacts/styles/components/user/EditSettings';
const EditSettings = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const groundsMine = useSelector((state) => state.user.groundsMine);
  const [selected, setSelected] = useState(user.groundsMine && user.groundsMine[0] ? user.groundsMine[0] : null);
  const [groundName, setGroundName] = useState();
  const [focusTime, setFocusTime] = useState();
  const [activeTime, setActiveTime] = useState();

  useEffect(() => {
    if (toggle) {
      eetch
        .userGrounds({ accessToken: user.accessToken, refreshToken: user.refreshToken })
        .then((grounds) => {
          const groundsMap = grounds.data.map((ground) => {const newGround = ground.ground; newGround.isOwner = ground.isOwner; return newGround;});
          dispatch(
            updateUser({
              groundsMine: groundsMap,
            })
          );
        })
        .catch((err) => {
          if (err.message === 'RefreshTokenExpired') {
            dispatch(logoutUser());
            dispatch(setMenu(false));
            dispatch(setMessage(false));
            navigate(`/login`);
          }
        });
    }
  }, [toggle]);

  useEffect(() => {
    if (user.groundsMine) {
      setSelected(user.groundsMine.filter((ground) => ground.id === user.lastGround)[0]);
    }

  }, [user.groundsMine]);

  const submitChange = () => {
    eetch
      .editGround({
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
        groundId: selected.id,
        name: groundName,
        focusTime,
        activeTime,
      })
      .then(() => {
        eetch
          .userGrounds({ accessToken: user.accessToken, refreshToken: user.refreshToken })
          .then((grounds) => {
            const groundsMap = grounds.data.filter((ground) => ground.isOwner === true).map((ground) => ground.ground);
            groundsMine.current = groundsMap;
            dispatch(
              updateUser({
                groundsMine: groundsMap,
              })
            );
          })
          .catch((err) => {
            if (err.message === 'RefreshTokenExpired') {
              dispatch(logoutUser());
              dispatch(setMenu(false));
              dispatch(setMessage(false));
              navigate(`/login`);
            }
          });
      })
      .catch((err) => {
        if (err.message === 'RefreshTokenExpired') {
          dispatch(logoutUser());
          dispatch(setMenu(false));
          dispatch(setMessage(false));
          navigate(`/login`);
        }
      });
  };

  useEffect(() => {
    if (selected) {
      setGroundName(selected.name);
      setFocusTime(selected.focusTime);
      setActiveTime(selected.activeTime);
    }
  }, [selected]);

  return (
    <>
      <s.OutWrapper $toggle={toggle} onClick={() => setToggle(false)} />
      <s.EditWrapper $toggle={toggle} onClick={() => setToggle(false)}>
        <s.EditModalWrapper onClick={(event) => event.stopPropagation()}>
          <s.GradBoxWrapper>
            {selected && groundsMine && groundsMine.length > 0  ? (
              <>
                <SelectTransparent label="그라운드" list={groundsMine} select={setSelected} selected={selected.name} />
                {selected.isOwner && <><Input label="그라운드 명" data={groundName} setData={setGroundName} refPing={selected} />
                <Input label="집중시간" data={focusTime} setData={setFocusTime} />
                <Input label="활동시간" data={activeTime} setData={setActiveTime} />
                <GroundUsers selected={selected} />
                <s.DivLine /></>}
                
                <GetAlert groundId={selected.id}/>
                <s.ButtonWrapper>
                  {selected.isOwner && <s.ProfileEditButton type="button" onClick={submitChange}>
                    적용
                  </s.ProfileEditButton>}
                  
                  <s.CloseButton onClick={() => setToggle(false)}>닫기</s.CloseButton>
                </s.ButtonWrapper>
              </>
            ) : (
              <s.ButtonWrapper>
                <s.CloseButton onClick={() => setToggle(false)}>닫기</s.CloseButton>
              </s.ButtonWrapper>
            )}
          </s.GradBoxWrapper>
          <s.GradBoxTop />
          <s.GradBoxBottom />
        </s.EditModalWrapper>
      </s.EditWrapper>
    </>
  );
};

export default EditSettings;
