import type { Meta, StoryObj } from '@storybook/react'
import IndividualSegment from './IndividualSegment.tsx'

const meta: Meta<typeof IndividualSegment> = {
  // meta configuration
  // it has type of the component
  component: IndividualSegment,
  title: 'IndividualSegment',
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
    value: 4,
  },
}
