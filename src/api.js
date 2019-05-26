export const search = query =>
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`, {
        method: "GET",
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => data.map(item => item.show));

export const episodes = id =>
    fetch(`http://api.tvmaze.com/shows/${id}/episodes`, {
        method: "GET",
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => data);

export const show = showId =>
    fetch(`http://api.tvmaze.com/shows/${showId}`, {
        method: 'GET',
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => data);

