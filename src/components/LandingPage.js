import Movielist from './Movielist'
import Logo1 from './Logo1.gif';
export default function LandingPage(){
    return <div>
        <img id='logo1' src={Logo1}></img>
        {/* <h1>Landing Page</h1> */}
        <Movielist/>
    </div>
}