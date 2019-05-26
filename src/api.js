export const search = query =>
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`, {
        method: "GET",
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => console.log(data));

export const show = id =>
    fetch(`http://api.tvmaze.com/shows/${id}?embed=cast`, {
        method: "GET",
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => console.log(data));
