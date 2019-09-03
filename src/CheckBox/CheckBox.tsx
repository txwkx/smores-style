import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

import {Text} from '../Text';
import {theme} from '../theme';

type Props = {
  id: string;
  checked: boolean;
  children: ReactNode;
  toggle: () => void;
};

export const CheckBox: FC<Props> = ({id, checked, children, toggle}) => (
  <BoxContainer id={id}>
    <Text tag="span" typo="base-small">
      {children}
    </Text>
    <input type="checkbox" checked={checked} onChange={toggle} />
    <Checkmark />
  </BoxContainer>
);

const Checkmark = styled.span`
  position: absolute;
  top: 2px;
  left: 0;
  width: 16px;
  height: 16px;
  background-color: ${theme.colors.grey2};
  border: solid 1px ${theme.colors.grey6};
  border-radius: 50%;
  box-sizing: border-box;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 2px;
    left: 5px;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  @media (min-width: 768px) {
    top: -3px;
    width: 24px;
    height: 24px;

    &:after {
      top: 4px;
      left: 8px;
      width: 4px;
      height: 9px;
      border-width: 0 3px 3px 0;
    }
  }
`;

const BoxContainer = styled.label`
  position: relative;
  padding-left: 24px;
  user-select: none;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;

    &:checked ~ ${Checkmark} {
      background-color: ${theme.colors.green5};
      border: solid 1px ${theme.colors.green5};
    }
    &:checked ~ ${Checkmark}:after {
      display: block;
    }
  }

  &:hover {
    ${Checkmark} {
      background-color: ${theme.colors.grey3};
      border: solid 1px ${theme.colors.grey7};
    }
  }

  @media (min-width: 768px) {
    padding-left: 32px;
  }
`;