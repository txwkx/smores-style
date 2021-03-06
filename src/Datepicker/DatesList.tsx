import React, { FC } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'

import { Day } from './types'

type Props = {
  items: Day[]
  handleDateSelect: (date: Date) => void
}

export const DatesList: FC<Props> = ({ items, handleDateSelect }) => (
  <Container>
    {items.map((item: Day, i) => (
      <ListItem
        key={i}
        disabled={item.disabled}
        className={`ListItem ${item.active ? 'active' : ''}`}
        onClick={() => handleDateSelect(item.date)}
      >
        {item.label}
      </ListItem>
    ))}
  </Container>
)

const Container = styled.ul`
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(7, 1fr);
  padding: 8px;

  @media (min-width: 360px) {
    grid-gap: 8px;
    padding: 16px;
  }

  @media (min-width: 768px) {
    grid-column-gap: 16px;
    padding: 32px;
  }
`

interface IListItem {
  disabled?: boolean
}

const ListItem = styled.li<IListItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  border: 1px solid transparent;
  font-weight: ${theme.font.weight.medium};
  font-size: 14px;
  line-height: 15px;
  color: ${theme.colors.blue7};
  background-color: transparent;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
  opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
  cursor: pointer;

  &:hover:not(.active) {
    background-color: ${theme.colors.grey2};
  }

  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue7};
    cursor: default;
  }
`
