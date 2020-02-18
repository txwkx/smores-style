import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

test('snapshot', () => {
  const { container } = render(<Button />)

  expect(container.firstChild).toMatchSnapshot()
})

test('renders Green button', () => {
  const { getByText } = render(
    <Button color="green" data-testid="testBtn">
      Push me
    </Button>,
  )
  const button = getByText(/push me/i)

  expect(button).toHaveTextContent('Push me')
  expect(button).toHaveAttribute('color', 'green')
})

test('renders Disabled Blue button', () => {
  const { container } = render(
    <Button disabled color="blue">
      Blue
    </Button>,
  )

  expect(container.firstChild).toHaveAttribute('color', 'blue')
  expect(container.firstChild).toBeDisabled()
})

test('render Block button with 100% width', () => {
  const { container } = render(<Button block>Block</Button>)

  expect(container.firstChild).toHaveStyleRule('width', '100%')
})

test('cant click Disabled button', () => {
  const { getByText } = render(<Button disabled>Click</Button>)
  const button = getByText(/click/i)

  // debug()
  fireEvent.click(button)
  expect(button).toBeDisabled()
})
