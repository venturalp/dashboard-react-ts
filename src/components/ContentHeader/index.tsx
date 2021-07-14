import React from 'react'
import { Container, Controllers, TitleCointainer } from './styles'

interface IContentHeaderProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <TitleCointainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleCointainer>
      <Controllers>{children}</Controllers>
    </Container>
  )
}

export default ContentHeader
