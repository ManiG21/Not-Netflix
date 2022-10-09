import { useState } from "react"

export default function Trailer({id}){
    const [video, setVideo] = useState({})
    useEffect(() => {
        getDataApi(`movie/${id}/videos`)
          .then(res => setVideo(res.results.filter(movie => movie.name.toLowerCase().includes(''))[0]))
      }, []) 
    return video.key ?
    
        <iframe
          className='movie-trailer'
    
          width="680" height="500"
    
          frameBorder="0"
            // src={`https://www.youtube.com/embed/${movieTrailerId}?enablejsapi=1`}
          src={`https://www.youtube.com/embed/${video.key}?enablejsapi=1`}
          // src={`https://www.youtube.com/results?search_query=${id}?enablejsapi=1`}
          allowFullScreen
    
        ></iframe> : null
    
}

    