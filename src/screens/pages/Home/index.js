import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from './styles';
import { NavBar, Products, Footer } from '../../../components/'
import { About } from '../../index';
const Home = () => {
    const useStyles = makeStyles((theme) => (styles));

    const classes = useStyles();
    return (
        <div className={classes.screen}>
            <NavBar />
            <Products />
            <About />
            <Footer />
        </div>)
}

export { Home };