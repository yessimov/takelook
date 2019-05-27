import React, { Component } from 'react';
import { showRequest } from '../actions/showActions';
import { episodesRequest } from '../actions/episodesActions';
import { connect } from 'react-redux'

import Episodes from './Episodes'

class Show extends Component {

    componentDidMount() {
        this.props.showRequest(this.props.match.params.id)
        this.props.episodesRequest(this.props.match.params.id)
    }

    render() {
        const { show, episodes, isShowFetching, isEpisodesFetching, isShowFetched } = this.props
        console.log(isShowFetched)
        return (
            <div className="show">
                {isShowFetching ?
                    <p>Загрузка</p>
                    :
                    <article>
                        <h1>{show.name}</h1>
                        <div className="show-block">
                            {isShowFetched ? <img src={show.image.medium} alt={show.name} /> : ''}
                            <div
                                className="show-block-text"
                                dangerouslySetInnerHTML={{
                                    __html: show.summary
                                }}
                            />
                        </div>
                    </article>
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
    isEpisodesFetching: state.episodes.isFetching,
    isShowFetched: state.show.isFetched
})

const mapDispatchToProps = {
    showRequest,
    episodesRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)