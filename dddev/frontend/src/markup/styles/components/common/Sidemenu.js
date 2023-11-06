import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidemenuWrapper = styled.aside`
  position: relative;
  z-index: 2;

  width: ${({ $menuToggle }) => ($menuToggle ? '275px' : '0px')};
  flex-shrink: 0;

  overflow: hidden;

  transition: width 0.5s ease;
`;

export const PositionWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 275px;
  height: 100%;

  background-color: var(--bg-lite);
  box-shadow:
    rgba(0, 0, 0, 0.24) 0px 1px 1px,
    rgba(0, 0, 0, 0.24) 0px 2px 2px,
    rgba(0, 0, 0, 0.24) 0px 4px 4px;

  border: 1px solid var(--border-basic);
`;

export const MenuNav = styled.nav`
  position: relative;
  margin-top: 50px;
`;

export const MenuCategory = styled(Link)`
  display: block;
`;

export const MenuChild = styled(Link)`
  display: block;
`;

export const GroundList = styled.ul`
  position: absolute;
  top: 30px;
  left: 0;

  width: 275px;
  transform: translateY(${({ $groundListToggle }) => ($groundListToggle ? '-30px' : '-100%')});

  background-color: white;
  padding-bottom: 30px;

  transition: transform 0.5s ease;

  & > div {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 275px;
    height: 30px;

    background-color: #aaa;

    cursor: pointer;
  }

  & > li:nth-last-child(2) {
    margin: 6px 0;
    list-style-type: none;
  }
`;

export const GroundItem = styled.li`
  color: var(--font-basic);
  cursor: pointer;
`;

export const BottomWrapper = styled.div``;

export const MenuButton = styled.button`
  display: block;
  color: var(--font-basic);
`;
