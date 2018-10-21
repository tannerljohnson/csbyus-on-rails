import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../components/App'
import CourseOverview from '../components/CourseOverview'
import Sidebar from '../components/Sidebar'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={CourseOverview} />
    </Router>,
  document.body.appendChild(document.createElement('div'))
  )
})
