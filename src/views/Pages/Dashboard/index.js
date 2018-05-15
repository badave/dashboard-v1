import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../../Containers/Navigation/index';
import Tasks from '../../Panes/Tasks';
import './style.css';

class DashboardIndex extends Component {
    render() {
        return (
            <div className={`slds-grid slds-wrap`}>
                <Navigation />

                <Switch>
                    <Route exact path='/dashboard' component={Tasks} />
                </Switch>
            </div>
        )
    }
}

export default DashboardIndex;

