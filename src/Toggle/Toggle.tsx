import React, { FC } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'

type Props = {
  /** unique ID */
  id: string
  /** checked flag  */
  checked: boolean
  /** onToggle listener  */
  onToggle: () => void
}

export const Toggle: FC<Props> = ({ checked, onToggle }) => {
  return (
    <Switch>
      <Checkbox type="checkbox" checked={checked} onChange={onToggle} />
      <Slider />
    </Switch>
  )
}

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 32px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.grey3};
  border: 1px solid;
  border-color: ${theme.colors.grey4};
  border-radius: 28px;
  transition: 0.2s background-color border-color;
  outline: none;

  &:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 3px;
    bottom: 3px;
    background-color: ${theme.colors.white};
    transition: 0.2s transform;
    border-radius: 50%;
  }
`

const Checkbox = styled.input`
  &:checked + ${Slider} {
    background-color: ${theme.colors.green6};
    border: 1px solid;
    border-color: ${theme.colors.green7};
  }

  &:checked + ${Slider}:before {
    transform: translateX(18px);
  }
`
