import React, { Component } from 'react';
import { showRequest } from '../actions/showActions';
import { episodesRequest } from '../actions/episodesActions';
import { connect } from 'react-redux'

import Episodes from './Episodes'

class Show extends Component {

    componentDidMount() {
        this.props.showRequest(82)
        this.props.episodesRequest(82)
    }

    render() {
        const { show, episodes, isShowFetching, isEpisodesFetching } = this.props
        return (
            <div>
                {isShowFetching ?
                    <p>Загрузка</p>
                    :
                    <ul>
                        {show.name}
                    </ul>
                }
                <Episodes 
                    episodes={episodes}
                    isFetching={isEpisodesFetching}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    show: state.show.show,
    episodes: state.episodes.episodes,
    isShowFetching: state.show.isFetching,
    isEpisodesFetching: state.episodes.isFetching
})

const mapDispatchToProps = {
    showRequest,
    episodesRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)