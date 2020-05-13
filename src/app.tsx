import React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  ${reset}
`

function App() {
  return (
    <React.Fragment>
      <Global />
      <div>
        <header>
          <p>Hello Vite + React!</p>
          <p>
            Edit <code>App.jsx</code> and save to reload.
          </p>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </React.Fragment>
  )
}

export default App
