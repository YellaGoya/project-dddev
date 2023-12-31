import styled from 'styled-components';

export const LogWrapper = styled.div`
  min-width: 340px;
  max-width: 960px;
  padding-top: 30px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

export const LogInstructionWrapper = styled.article`
  position: relative;
  width: 100%;
  padding: 10px;
  height: ${({ $toggle }) => ($toggle ? 'fit-content' : '59px')};

  overflow: hidden;

  border-radius: 0.75rem;
  border: 1px solid var(--border-basic);

  /* transition: height 0.4s ease; */
  background-color: var(--bg-rev);

  & > h2 {
    position: relative;
    padding-left: 5px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--font-basic);

    margin-top: 20px;
    margin-bottom: 10px;
  }

  pre {
    font-size: 0.9rem;
    font-family: 'consolas', 'gulim';
    width: auto;
    margin: 0px 10px 15px 10px;

    overflow-x: auto;

    padding: 30px 20px 30px 20px;
    border-radius: 0.25rem;
    background-color: var(--bg-rev-hover);
    color: var(--font-lite);

    &::-webkit-scrollbar {
      height: 9px;
    }
    &::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }
  }

  box-shadow:
    rgba(0, 0, 0, 0.24) 0px 1px 1px,
    rgba(0, 0, 0, 0.24) 0px 2px 2px,
    rgba(0, 0, 0, 0.24) 0px 4px 6px;
`;

export const LogTitle = styled.span`
  font-size: 1rem;
  font-weight: 700;

  display: flex;
  align-items: center;

  cursor: pointer;

  padding: 5px 10px;
  border-radius: 0.5rem;
  margin-bottom: 30px;

  color: var(--font-basic);
  &:hover {
    background-color: var(--bg-rev-hover);
  }

  & > svg.log-fold {
    position: absolute;
    right: 10px;
    fill: var(--font-basic);

    transform: ${({ $toggle }) => ($toggle ? 'rotate(180deg)' : 'rotate(360deg)')};
    fill: ${({ $toggle }) => ($toggle ? 'var(--font-toggle)' : 'var(--font-rev)')};

    transition: all 0.4s ease;
    pointer-events: none;
  }
`;

export const GenerateButton = styled.button`
  left: 185px;
  top: -6px;
  position: absolute;
  display: flex;
  align-items: center;

  background-color: var(--bg-lite);
  padding: 5px 10px;

  border-radius: 0.5rem;
  border: none;

  &:hover {
    background-color: var(--bg-lite-hover);
  }

  cursor: pointer;
  & > svg {
    width: 21px;
    height: 21px;
    margin-right: 3px;
  }
`;

export const LogListWrapper = styled.article`
  margin-top: 15px;

  width: 100%;
  background-color: var(--bg-dark);

  border-radius: 0.75rem;

  padding: 10px;
  padding-bottom: 20px;

  box-shadow:
    rgba(0, 0, 0, 0.24) 0px 1px 1px,
    rgba(0, 0, 0, 0.24) 0px 2px 2px,
    rgba(0, 0, 0, 0.24) 0px 4px 6px;
`;

export const LogListTitle = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  padding: 5px 10px;

  border-radius: 0.5rem;

  cursor: pointer;

  &:hover {
    background-color: var(--bg-lite);
  }

  & > svg.log-fold {
    position: absolute;
    right: 0px;
    fill: var(--font-rev);

    transform: ${({ $toggle }) => ($toggle ? 'rotate(180deg)' : 'rotate(360deg)')};
    fill: ${({ $toggle }) => ($toggle ? 'var(--font-toggle)' : 'var(--font-rev)')};

    transition: all 0.4s ease;
    pointer-events: none;
  }

  & > p {
    margin: 0;
    margin-left: 5px;
    font-size: 0.9rem;
    opacity: 0.5;
  }

  & > svg {
    margin-right: 5px;
  }
`;

export const LogList = styled.ul`
  list-style: none;
  padding: 0 5px;
  overflow-y: auto;
  overflow-x: hidden;
  transition: height 0.45s ease;
  max-height: ${({ $toggle }) => ($toggle ? '500px' : '0px')};

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: var(--thumb-hover);
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--font-rev);
    }
  }

  & > li:nth-child(even) {
    background-color: var(--bg-basic);
  }
`;

export const LogItem = styled.li`
  position: relative;
  width: calc(100%);
  padding: 5px 10px;
  border-radius: 0.25rem;

  & > p {
    width: calc(100% - 90px);
    font-size: 0.85rem;
    margin: 3px 0;
  }

  &:hover {
    & > button {
      visibility: visible;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }

  &.load-more {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;

    background-color: var(--bg-dark);
  }
`;

export const GPTButton = styled.button`
  position: absolute;
  right: 7px;
  bottom: 5px;
  width: 88px;
  height: 25px;
  padding: 0;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  visibility: hidden;

  border-radius: 0.25rem;

  background-color: transparent;
  transition: all 0.2s ease;

  border: none;

  & > svg {
    width: 21px;
    height: 21px;
    margin-right: 5px;
  }

  &:hover {
    background-color: var(--bg-lite-hover);
  }
`;

export const LogMoreButton = styled.button`
  padding: 10px 12px 5px 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--bg-lite-hover);
  }

  & > p {
    margin: 0;
  }
`;

export const DivLine = styled.div`
  width: 100%;
  height: 1px;

  margin: 50px 0;
  opacity: 0.3;
  background-color: var(--border-basic);
`;

export const CustomAddWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: var(--bg-lite);
  padding: 15px;
  padding-bottom: 20px;

  border-radius: 0.75rem;

  box-shadow:
    rgba(0, 0, 0, 0.24) 0px 1px 1px,
    rgba(0, 0, 0, 0.24) 0px 2px 2px,
    rgba(0, 0, 0, 0.24) 0px 4px 6px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;

    & > div {
      width: calc(40% - 39px);
      height: fit-content;
      margin: 0;

      & > div {
        width: 100%;
        margin: 0;
        border: 1px solid var(--border-basic);

        & > svg {
          right: 15px;
        }
      }

      & > ul {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }

  @media (max-width: 599px) {
    & > div {
      width: 100%;
      height: fit-content;
      margin: 0;

      & > div {
        width: 100%;
        margin: 0;
        border: 1px solid var(--border-basic);

        & > svg {
          right: 15px;
        }
      }

      & > ul {
        margin-left: 0;
        margin-right: 0;
      }
    }

    & > input {
      width: calc(100% - 63px);
      margin-left: 0;

      margin-bottom: 10px;
    }
  }
`;

export const ValueInput = styled.input`
  width: calc(60% - 39px);
  height: 40px;
  border-radius: 0.75rem;
  margin-left: 15px;
  border: 1px solid var(--border-basic);
  outline: none;
  background-color: transparent;
  padding: 0 15px;

  font-size: 1rem;
  font-weight: 400;
`;

export const CustomAddButton = styled.button`
  padding: 5px 10px;
  width: 48px;
  height: 40px;
  margin-left: 15px;

  background-color: transparent;

  &:hover {
    background-color: var(--bg-lite-hover);
  }
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  border-radius: 0.5rem;
  border: none;
`;

export const Customs = styled.span`
  padding: 3px 6px;
  width: fit-content;
  height: fit-content;

  line-height: 1.8rem;

  background-color: var(--font-toggle);
  color: var(--font-basic);

  border-radius: 0.5rem;

  overflow: hidden;

  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  font-size: 0.85rem;
  margin-right: 7px;
`;

export const GPTWrapper = styled.div`
  position: fixed;
  width: calc(100% - 30px);
  max-width: 650px;
  height: ${({ $loading }) => ($loading ? '174px' : 'fit-content')};

  display: ${({ $toggle }) => ($toggle ? 'block' : 'none')};
  visibility: ${({ $toggle }) => ($toggle ? 'visible' : 'hidden')};
  opacity: ${({ $toggle }) => ($toggle ? '1' : '0')};
  transition:
    visibility 0.2s ease,
    opacity 0.2s ease;

  right: 15px;
  bottom: 30px;

  border-radius: 0.75rem;
  border-bottom-right-radius: 0;

  box-shadow:
    rgba(0, 0, 0, 0.24) 0px 1px 1px,
    rgba(0, 0, 0, 0.24) 0px 2px 2px,
    rgba(0, 0, 0, 0.24) 0px 4px 6px;

  background-color: var(--bg-liter);

  .lds-grid {
    display: ${({ $loading }) => ($loading ? 'block' : 'none')};
    visibility: ${({ $loading }) => ($loading ? 'visible' : 'hidden')};
    opacity: ${({ $loading }) => ($loading ? '1' : '0')};
    transition:
      visibility 0.2s ease,
      opacity 0.2s ease;

    position: relative;
    width: 80px;
    height: 80px;

    margin: 0 auto;
  }
  .lds-grid div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    animation: lds-grid 1.2s linear infinite;
  }
  .lds-grid div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  .lds-grid div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
  @keyframes lds-grid {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }
`;

export const GPTTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 15px;

  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }
`;

export const GPTCloseButton = styled.button`
  width: 27px;
  height: 27px;

  & > svg {
    width: 21px;
    height: 21px;
    transform: translateY(1px);
  }

  visibility: ${({ $toggle }) => ($toggle ? 'visible' : 'hidden')};
  opacity: ${({ $toggle }) => ($toggle ? '1' : '0')};

  transition: all 0.2s ease;

  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 0.25rem;

  &:hover {
    background-color: var(--bg-liter-hover);
  }

  padding: 0;

  position: absolute;
  right: 10px;
  top: 10px;
`;

export const GPTAnswerWrapper = styled.div`
  white-space: pre-wrap;
  word-break: break-all;

  max-height: calc(100vh - 200px);

  overflow-x: hidden;
  overflow-y: auto;

  width: 100%;
  height: fit-content;
  padding: 15px;

  display: ${({ $loading }) => ($loading ? 'none' : 'block')};

  visibility: ${({ $loading }) => ($loading ? 'hidden' : 'visible')};
  opacity: ${({ $loading }) => ($loading ? '0' : '1')};
  transition:
    visibility 0.2s ease,
    opacity 0.2s ease;

  border-radius: 0.75rem;

  margin-top: 10px;

  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.25rem;

  margin-bottom: 30px;

  & > pre {
    font-size: 0.9rem;
    & > span {
      font-size: 0.9rem;
    }
    font-family: 'consolas', 'gulim';
    width: auto;
    margin: 0px 10px 15px 10px;

    overflow-x: auto;

    padding: 30px 20px 30px 20px;
    border-radius: 4px;

    background-color: var(--bg-lite);

    box-shadow:
      rgba(0, 0, 0, 0.24) 0px 1px 1px,
      rgba(0, 0, 0, 0.24) 0px 2px 2px,
      rgba(0, 0, 0, 0.24) 0px 4px 6px;

    /* &::before {
        width: 10px;
      } */

    &::-webkit-scrollbar {
      height: 9px;
    }
    &::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }
  }
`;
