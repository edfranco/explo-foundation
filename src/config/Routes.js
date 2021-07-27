import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from '../Components/HomePage/HomePage';
import VisitContainer from '../Containers/VisitContainer/VisitContainer';
import Doc from '../Containers/Doc'
// internal components


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/documentation" component={Doc} />
            <Route path="/visit" component={VisitContainer} />
        </Switch>
    );
};

export default withRouter(Routes);
