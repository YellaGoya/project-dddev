import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  display: ${({ $display }) => ($display ? 'block' : 'none')};

  background-color: inherit;
`;

export const Label = styled.h2`
  position: absolute;
  left: 40px;
  top: -9px;
  padding: 0 5px;
  color: var(--font-border);

  background-color: inherit;

  font-weight: 500;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  width: calc(100% - 50px);
  height: 55px;
  margin: 0 25px;

  border-radius: 0.75rem;
  border: 1px solid ${({ $isActive }) => ($isActive ? 'var(--border-focus)' : 'var(--border-basic)')};
  background-color: transparent;

  font-size: 0.9rem;

  color: var(--font-rev);
  padding: ${({ $isClick }) => ($isClick ? '0 57px 0 20px' : '0 20px 0 20px')};

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

export const DivLine = styled.div`
  position: absolute;
  top: 3px;
  right: 41px;
  width: 1px;
  height: 23px;

  background-color: var(--border-basic);
`;
export const Button = styled.button`
  position: absolute;
  right: 28px;
  top: 50%;
  transform: translateY(calc(-50% + 1px));
  background-color: transparent;
  border: none;
  display: block;
  width: fit-content;

  cursor: pointer;

  & > svg {
    fill: var(--font-border);
  }
`;

export const Message = styled.p`
  position: absolute;
  right: 35px;
  bottom: -32px;
  font-size: 0.8rem;
  color: ${({ $fail }) => ($fail ? 'var(--font-warning)' : 'var(--font-border)')};
`;

export const ArrayList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 25px 0 25px;

  & > li {
    display: inline-block;
  }
`;

export const ArrayFixed = styled.li`
  cursor: default;
`;

export const ArrayItem = styled.li`
  margin: 4px;
  margin-bottom: 4px;
  padding: 3px 6px;
  line-height: 1.2rem;

  background-color: var(--font-on-edit);
  color: var(--font-basic);

  border-radius: 0.5rem;

  font-size: 0.85rem;
  margin-right: 7px;

  cursor: pointer;
`;
