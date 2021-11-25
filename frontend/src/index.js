import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Theme from './styles/Theme'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Theme>
      <App />
    </Theme>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
