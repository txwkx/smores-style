import React from 'react'
import { Box } from './Box'

export default {
  title: 'Box',
  component: Box,
}

const Template = (args) => <Box {...args}>Some lovely content.</Box>

export const Default = Template.bind({})

Default.args = {
  flex: true,
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-starts',
  m: '16px',
  p: '16px',
}

Default.argTypes = {
  theme: { table: { disable: true } },
  as: { table: { disable: true } },
  forwardedAs: { table: { disable: true } },
}
