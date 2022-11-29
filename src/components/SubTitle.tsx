import {Title} from '@mantine/core'
import React from 'react'
interface Props {
  children: React.ReactNode
}

export function Subtitle({children}: Props): JSX.Element {
  return <Title size="h4">{children}</Title>
}
