import { DefaultTheme } from "styled-components"
import { pxToRem } from '../styles.helpers'

const darkTheme: DefaultTheme = {
  title: 'dark',
  text: {
    pxToRem
  },
  colors: {
    primary: '#1B1F38',
    secondary: '#252A48',
    tertiary: '#313862',
    white: '#fff',
    black: '#000',
    gray: '#BFBFBF',
    success: '#4E41F0',
    info: '#F7931B',
    warning: '#E44C4E',
  }
}

export default darkTheme
