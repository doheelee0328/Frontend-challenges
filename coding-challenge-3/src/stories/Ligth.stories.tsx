import type { Meta, StoryObj } from '@storybook/react'
import Light from './Light.tsx'

const meta: Meta<typeof Light> = {
  // meta configuration
  // it has type of the component
  component: Light,
  title: 'Light',
}

// once it has initial meta, what the story is for

export default meta
// export meta

type Story = StoryObj<typeof meta>
// then u put the type
// create story

// inside this component, we want a base
export const Base: Story = {
  args: {
    yellow: 'yellow',
  },
}
