import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blog from './Blog'

class App extends React.Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </div>
    )
  }
}

export default App;
