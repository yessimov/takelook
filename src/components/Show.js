import React, { Component } from 'react';
import { showRequest } from '../actions/showActions';
import { connect } from 'react-redux'

class Show extends Component {

    componentDidMount() {
        this.props.showRequest(82)
    }

    render() {
        const { show, isFetching } = this.props
        return (
            <div>
                {isFetching ?
                    <p>Загрузка</p>
                    :
                    <ul>
                        {show.name}
                    </ul>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    show: state.show.show,
    isFetching: state.show.isFetching
})

const mapDispatchToProps = {
    showRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)