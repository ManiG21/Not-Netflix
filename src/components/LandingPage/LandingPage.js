import Movielist from '../MovieList/Movielist'
import "../LandingPage/LandingPage.css"
import Logo from "./Logo1.gif"
export default function LandingPage(){
    return <div className='landingPage'>
        <img id='logo1'src={Logo}></img>
        <Movielist/>
    </div>
}