export const getDataApi = (movie, query) => { 
    return fetch(`https://api.themoviedb.org/3/${movie}?api_key=8b42c6b9fbe364b5fdf9b26b3f4cac6f&${query}`)
        .then(res => res.json()) 


}