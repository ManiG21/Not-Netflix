export const getDataApi = (route) => { 
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=8b42c6b9fbe364b5fdf9b26b3f4cac6f`)
        .then(res => res.json()) 
}