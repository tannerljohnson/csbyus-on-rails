import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  HashRouter
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import CourseVersionsPage from './CourseVersionsPage'
import Blog from './Blog'
import Footer from './Footer';
import ContactForm from './ContactForm'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import HeaderAppBar from './HeaderAppBar';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
});

class App extends React.Component {
  _redirectToHome() {
    return <Redirect to="/" />;
  }

  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <HeaderAppBar/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/curriculahub" component={CourseVersionsPage} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/joinus" component={ContactForm} />
              {/* catch-all redirects to home */}
              <Route render={this._redirectToHome} />
            </Switch>
            <Divider/>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
