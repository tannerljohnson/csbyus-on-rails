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
import CurriculaHubLanding from './CurriculaHubLanding'
import Footer from './Footer';
import ContactForm from './ContactForm'
import ScrollToTop from './ScrollToTop'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import HeaderAppBar from './HeaderAppBar';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2f2c71',
    //   light: '#50C878',
    //   main: '##50C878',
    //   dark: '#2E8B57',
      // contrastText: '#fff',
    },
    secondary: {
      // light: '#8F9779',
      main: '#30b271'
      //main: '#F48FB1',
      // dark: ' #4F7942',
      // contrastText: '#000',
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
            <ScrollToTop>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/joinus" component={ContactForm} />
                <Route exact path="/curriculahub" component={CurriculaHubLanding} />
                // <Route exact path="/blog" component={Blog} />
                {/* catch-all redirects to home */}
                <Route render={this._redirectToHome} />
              </Switch>
            </ScrollToTop>
            <Divider/>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
