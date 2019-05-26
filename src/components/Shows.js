import React, { Component } from 'react';
import { connect } from 'react-redux'

class Shows extends Component {
    render() {
        const { films, isFetching } = this.props
        return (
            <div>
                {isFetching ? <p>Загрузка...</p> : films.map((show, i) => (
                    <article key={i}>
                        {show.image && (
                            <img src={show.image.medium} alt={show.name} />
                        )}
                        <h3>{show.name}</h3>
                        <p>Genres: {show.genres.map(item => item + ' ')}</p>
                    </article>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    films: state.search.films,
    isFetching: state.search.isFetching
})

export default connect(mapStateToProps)(Shows)