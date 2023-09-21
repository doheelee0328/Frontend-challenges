import React from 'react'

interface LightProps {
  yellow: string
}

const Light = ({ yellow }: LightProps) => {
  return <div style={{ backgroundColor: yellow }}>Why</div>
}

export default Light

// traffic lights have 3 different colours
