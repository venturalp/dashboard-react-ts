import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html, body {
      overflow-x: hidden;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body, #root {
      height: 100%;
      font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
    }

    *, button, input, text-area {
      border: 0;
      outline: 0;
      font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
    }
    button, *[role=button] {
      cursor: pointer;
    }
`
