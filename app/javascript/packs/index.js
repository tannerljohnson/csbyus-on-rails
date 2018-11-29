import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../components/App'
import About from '../components/About'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={About} />
    </Router>,
  document.body.appendChild(document.createElement('div'))
  )
})
