import React from 'react'
import { SearchInput } from './SearchInput'
import { Container } from './Container'

export default {
  title: 'Search Input',
  component: SearchInput,
}

const Template = (args) => <Container {...args} />

export const Default = Template.bind({})
