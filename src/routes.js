import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// pages
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import PeoplePage from './pages/PeoplePage';

const Routes = () => (
    <HashRouter>
        <ScrollToTop />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/people" component={PeoplePage} />

            {/* no match */}
            <Route path="*" component={HomePage} />

        </Switch>
    </HashRouter>
)

export default Routes;