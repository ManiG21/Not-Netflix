// useNavigate has to be imported in order to work 
import { Link, useNavigate } from 'react-router-dom'
// logo 
import Logo from './Logo1.gif'
// in order to use "state" we need to import 
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    // created a new variable which we used search
    // use state allows us to track state ina  function component 
    // use state accepts the current (search) and returns 2 values (setsearch: updates our state)
    const [search, setSearch] = useState('')
    
//  use navigate is in order to redirect user when button (search) is clicked 
    const navigate = useNavigate()
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
     // url changes to which ever movie user searched 
    // example:spiderman 
    const handleSubmit = () => {
        navigate({
        pathname: `/search`,
            search: `?query=${search}`
        })
    }

// appears at the top of the page in order for user to be able to navigate 
// to a different  page without having to change url or refresh page 
    return <div className="navbar">
       {/* the logo  */}
        <Link to='/'>
            <img id='logo1' src={Logo} />
        </Link> 
        {/* when logo is clicked it takes user back to landing page where category boxes are displayed  */}
        <div className='searchBar'> 
            {/* <Link to='/Home'>LandingPage</Link> */}
             {/* code for the search bar  */}
            <input value={search} onChange={handleChange}></input>
            {/*created a button 'search' */}
            <button onClick={handleSubmit}>search</button>
        </div>
    </div>
    // divs in order to divde and be able to target specific parts for styling
}