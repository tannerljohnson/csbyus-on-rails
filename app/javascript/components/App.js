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
import Blog from './Blog'
import CurriculaHubLanding from './CurriculaHubLanding'
import InTheNews from './InTheNews'
import Footer from './Footer';
import ContactForm from './ContactForm'
import ScrollToTop from './ScrollToTop'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import HeaderAppBar from './HeaderAppBar';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme } from '@material-ui/core/styles';
import CourseOverview from './CourseOverview'
import CourseVersionsPage from './CourseVersionsPage'
import pink from '@material-ui/core/colors/pink';
import Typography from '@material-ui/core/Typography';


const theme = createMuiTheme({
  Typography: {
    fontFamily: [
      'Avenir Next',
      'Gill Sans',


    ]
  },
  palette: {
    primary: {
      main: '#2f2c71',
      rose: '#c2185b',
      purple: '#7e57c2',
      green: '#3b945e',
      blue: '#1976d2',
      lightblue: '#65ccb8',
      darkturq: '#026670',
      orangepink: '#f4976c',
      yellow: '#fce181',
      white: '#ffffff',
    },
    secondary: {
      lightturq: '#57ba98',
      light: '#fef9c7',
      main: '#30b271',
      darkgrey: '#182628',
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
                  {/*<Route exact path="/overview" component={CourseOverview} />*/}
                  {/*<Route exact path="/version" component={CourseVersionsPage} />*/}
                  <Route exact path="/news" component={InTheNews} />
                  {/*<Route exact path="/blog" component={Blog} />*/}
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
