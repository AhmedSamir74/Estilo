import React from 'react';
import { Home } from "../screens/";
import { Switch, Route } from 'react-router-dom';

const MainNavigator = () => {
    return (
        <Switch>
            {/* <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/topics">
                <Topics />
            </Route> */}
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default MainNavigator;