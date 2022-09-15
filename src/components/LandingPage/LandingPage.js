import Movielist from '../MovieList/Movielist'
import "../LandingPage/LandingPage.css"

export default function LandingPage(){
    return <div className='landingPage'>
        <h1>Landing Page</h1>
        <Movielist/>
    </div>
}