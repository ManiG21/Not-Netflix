// This fetch data from the TMDB Movie API 
export const getDataApi = (route) => { 
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=8b42c6b9fbe364b5fdf9b26b3f4cac6f`)
        .then(res => res.json()) 
}
// Creates an image component based on movie data
export const MovieImage = ({movie}) => movie &&
<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt= {movie.title}/>