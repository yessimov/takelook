import React, { Component } from 'react';
import Search from './Search'
import Shows from './Shows'
import Show from './Show'

class App extends Component {

    render() {

        return (
            <div>
                <Search />
                <Shows />
                <Show />
            </div>
        )
    }
}

export default App;