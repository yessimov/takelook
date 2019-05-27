import React, { Component } from 'react';
import Search from './Search'
import Shows from './Shows'
import Show from './Show'
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route path="/" exact component={Search} />
                    <Route path="/shows/:name" component={Shows} />
                    <Route path="/show/:id" component={Show} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default App;