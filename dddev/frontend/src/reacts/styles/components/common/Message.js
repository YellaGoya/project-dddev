import styled from 'styled-components';

export const Message = styled.div`
  position: fixed;
  top: 45px;
  right: ${({ $toggle }) => ($toggle ? '10px' : 'min(-355px,max(-550px, calc(-100vw - 20px)))')};
  width: calc(100vw - 20px);
  min-width: 355px;
  max-width: 550px;
  border: 1px solid var(--border-basic);

  height: fit-content;
  max-height: calc(100vh - 55px);

  background-color: var(--bg-dark);
  border-radius: 0.75rem;
  z-index: 3;

  visibility: ${({ $toggle }) => ($toggle ? 'visible' : 'hidden')};
  opacity: ${({ $toggle }) => ($toggle ? '1' : '0')};
  color: var(--font-rev);
  transition:
    visibility 0.5s ease,
    right 0.5s ease,
    opacity 0.5s ease;

  padding-top: 50px;

  & > span {
    padding: 5px 10px;
    display: flex;
    align-items: center;

    position: absolute;
    right: 15px;
    top: 10px;

    border-radius: 0.5rem;

    &:hover {
      background-color: var(--bg-lite);
    }

    cursor: pointer;
    & > svg {
      margin-right: 5px;
    }
  }

  & > h1 {
    position: absolute;

    left: 30px;
    top: 16px;

    font-size: 1.2rem;
  }
`;

export const LiteMode = styled.div`
  position: absolute;
  width: 27px;
  height: 27px;

  top: 16px;
  left: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;

  cursor: pointer;

  background-color: ${({ $toggle }) => ($toggle ? 'var(--font-rev)' : 'transparent')};

  &:hover {
    background-color: ${({ $toggle }) => ($toggle ? 'var(--font-rev)' : 'var(--bg-lite)')};
  }

  & > svg {
    fill: ${({ $toggle }) => ($toggle ? 'var(--font-basic)' : 'var(--font-rev)')};
    width: 21px;
    height: 21px;
  }
`;

export const DarkMode = styled.div`
  position: absolute;
  width: 27px;
  height: 27px;

  top: 16px;
  left: 153px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;

  cursor: pointer;

  background-color: ${({ $toggle }) => ($toggle ? 'var(--font-rev)' : 'transparent')};

  &:hover {
    background-color: ${({ $toggle }) => ($toggle ? 'var(--font-rev)' : 'var(--bg-lite)')};
  }

  & > svg {
    fill: ${({ $toggle }) => ($toggle ? 'var(--font-basic)' : 'var(--font-rev)')};
    width: 21px;
    height: 21px;
  }
`;
