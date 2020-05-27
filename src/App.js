import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MainNavigator from "./navigation/MainNavigator";
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require('bootstrap');


export default function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        borderWidth: 5
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <div>
          <nav className="d-none">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </nav>
        </div>
        <MainNavigator />
      </Router>
    </div>
  );
}