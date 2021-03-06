import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoadingPage from './components/LoadingPage/LoadingPage';
import AdminPage from './components/AdminPage/AdminPage';
import CompletedPage from './components/CompletedPage/CompletedPage';
import HomePage from './components/HomePage/HomePage';
import JournalPage from './components/JournalPage/JournalPage';
import MilestonePage from './components/MilestonePage/MilestonePage';
import Timer from './components/Timer/Timer';
import TimerSelect from './components/TimerSelect/TimerSelect';
import Countdown from './components/Countdown/Countdown';

import './styles/main.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      light: red,
      main: '#c82027',
      dark: '#AD242B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c1c1c1',
      main: '#5f5f5f',
      dark: '#000',
      contrastText: '#fff',
    },
    // secondary: cyan,
    // error: red,
    // contrastThreshold: 3,
    // tonalOffset: 0.2,
  }
});

const App = () => (
  <MuiThemeProvider theme={myTheme}>
  <div>
    {/* <Header title="Box Lunch Lifestyle" /> */}
    <Router>
      <Switch>
        <Redirect exact from="/" to="/loading" />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
          <Route
          path="/loading"
          component={LoadingPage}
        />
        <Route
          path="/admin"
          component={AdminPage}
        />
        <Route
          path="/completed"
          component={CompletedPage}
        />
        <Route
          path="/home"
          component={HomePage}
        />
        <Route
          path="/journal"
          component={JournalPage}
        />
        <Route
          path="/milestone"
          component={MilestonePage}
        />
        <Route
          path="/timer"
          component={Timer}
        />
        <Route
          path="/timerSelect"
          component={TimerSelect}
        />
        <Route
          path="/countdown"
          component={Countdown}
        />


        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
  </MuiThemeProvider>
);

export default App;
