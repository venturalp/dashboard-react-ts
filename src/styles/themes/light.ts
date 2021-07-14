import { DefaultTheme } from 'styled-components'
import { pxToRem } from '../styles.helpers'

const lightTheme: DefaultTheme = {
  title: 'light',
  text: {
    pxToRem
  },
  colors: {
    primary: '#DCDCDC',
    secondary: '#FFFFFF',
    tertiary: '#8C8888',
    white: '#000',
    black: '#fff',
    gray: '#BFBFBF',
    success: '#03BB85',
    info: '#3B5998',
    warning: '#FF6961',
  }
}

export default lightTheme
