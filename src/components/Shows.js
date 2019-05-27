import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRequest } from '../actions/searchActions'

class Shows extends Component {

    componentDidMount() {
        this.props.searchRequest(this.props.match.params.name)
    }

    render() {
        const { films, isFetching } = this.props
        return(
            <div className="shows">
                {isFetching ? <p>Загрузка...</p> : films.map((show, i) => (
                    <Link to={`/show/${show.id}`} key={i}>
                        <article className="shows-item">
                            <div>
                                {show.image && (
                                    <img src={show.image.medium} alt={show.name} />
                                )}
                            </div>
                            <div className="shows-item-text" >
                                <h3>{show.name}</h3>
                                <p className="genres" ><span style={{"color": "black"}}>Genres: </span>{show.genres.map(item => item + ' ')}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    films: state.search.films,
    isFetching: state.search.isFetching
})

const mapDispatchToProps = {
    searchRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Shows)