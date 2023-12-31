import styled from 'styled-components';

export const FlightWrapper = styled.article`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 729px) {
    flex-direction: column;
  }
  z-index: 0;
`;

export const BiImage = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  filter: blur(5px);
  opacity: 0.7;

  pointer-events: none;
  object-fit: cover;
  z-index: 2;
`;

export const DescWrapper = styled.div`
  & > h1 {
    font-size: 5rem;
    margin: 0;
  }
  & > p {
    margin: 0;
  }

  & > p.powered {
    width: 375px;
    text-align: center;
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;

    opacity: 0.6;
  }
  z-index: 10;
`;

export const GithubLoginButton = styled.button`
  width: 270px;
  height: 50px;

  margin-left: 100px;

  @media (max-width: 729px) {
    margin-top: 50px;
    margin-left: 0;
  }
  transform: translateY(10px);

  z-index: 10;

  border-radius: 0.75rem;
  border: 1px solid var(--border-basic);
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;

  cursor: pointer;
  &:hover {
    background-color: var(--bg-rev-hover);
    color: var(--font-basic);

    & > svg {
      fill: var(--font-basic);
    }
  }

  & > svg {
    margin-right: 5px;
    transition: all 0.2s ease;
  }
`;
