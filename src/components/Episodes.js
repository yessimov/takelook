import React from 'react'

const Episodes = ({ isFetching, episodes }) => (
    <div>
        {
            isFetching ?
            <p>Загрузка...</p>
            :
            <ul>
                {
                    episodes.map((episode, i) => (
                        <li key={i}>
                            <span>
                                {`${episode.season}x${episode.number}`}
                            </span>
                            <span>
                                {episode.name}
                            </span>
                            <span>
                                {episode.airdate}
                            </span>
                        </li>
                    ))
                }
            </ul>

    }
    </div>
)

export default Episodes;