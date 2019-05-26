import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchRequest } from '../actions/searchActions';
import { showRequest } from '../actions/showActions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.searchRequest('Game of thrones')
        this.props.showRequest(82)
    }

    render() {
        console.log(this.props.films)
        console.log(this.props.show)
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    films: state.search.films,
    show: state.show.show
})

const mapDispatchToProps = {
    searchRequest,
    showRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App);