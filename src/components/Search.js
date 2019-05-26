import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../actions/searchActions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchRequest(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }
    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={ inputValue } onChange={this.handleChange} placeholder="Search Shows"/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    films: state.search.films
})

const mapDispatchToProps = {
    searchRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)