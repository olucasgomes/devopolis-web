import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arvo', serif;
  }

  .hidden {
    display: none;
  }

  * {
  margin: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export default GlobalStyle