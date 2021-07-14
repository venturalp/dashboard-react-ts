import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import { Container } from './styles'
import SelectInput from '../../components/SelectInput'

const Dashboard: React.FC = () => {
  const options = [
    {
      value: 'gui',
      label: 'Guilherme',
    },
    {
      value: 'sthe',
      label: 'Sthefani',
    },
    {
      value: 'rod',
      label: 'Rodrigo',
    },
  ]

  return (
    <Container>
      <ContentHeader title="Dashboard title" lineColor="green">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  )
}

export default Dashboard
