import type { Meta, StoryObj } from '@storybook/react'
import Segments from './Segments.tsx'

const meta: Meta<typeof Segments> = {
  // meta configuration
  // it has type of the component
  component: Segments,
  title: 'Segments',
}

// once it has initial meta, what the story is for

export default meta
// export meta

type Story = StoryObj<typeof meta>
// then u put the type
// create story

// inside this component, we want a base
export const Segment: Story = {
  args: {
    value: 0,
  },
}
