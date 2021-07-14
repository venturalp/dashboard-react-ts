import React from 'react'
import { Container } from './styles'

interface ISelectInputProps {
  options: {
    value: string | number
    label: string | number
  }[]
}

export const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options &&
          options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </Container>
  )
}

export default SelectInput
