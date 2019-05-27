import React from 'react'

const Episodes = ({ isFetching, episodes }) => (
    <div className="episodes">
        {
            isFetching ?
            ''
            :
            <table>
                <thead>
                <tr>
                    <th style={{"textAlign": "left"}}>Episode Name</th>
                    <th>Airdate</th>
                    <th>Trailer</th>
                </tr>
                </thead>
                <tbody>
                {
                    episodes.map((episode, i) => (
                        <tr key={i}>
                            <td>
                                {`${episode.season}x${episode.number}: ${episode.name}`}
                            </td>
                            <td style={{"textAlign": "center"}}>
                                {episode.airdate}
                            </td>
                            <td>
                                {}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

    }
    </div>
)

export default Episodes;