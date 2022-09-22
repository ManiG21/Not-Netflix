import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo1.gif'
import { useState } from 'react'
// import LandingPage from '../LandingPage/LandingPage'


export default function Navbar() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = () => {
        navigate({
            pathname:`/search`,
            search:`?query=${search}`
        })
    }
        // localStorage.setItem('myMovies',JSON.stringify([{name:'spiderman'}, {name:'batman'}]))
        // const myMovies = JSON.parse(localStorage.getItem('myMovies'))
        // console.log(myMovies)
        // same as usestate^^
        // save when close the tab 

        // want to usestate of the movies default of the initial value (what is in localstorange)
        // my movies set movies = usestate (ls)
        // have a button and when cutton is clicked its going to update the usestate array "mymovies"
        // create a useEffect whenever the array is updated want to run another function 
        

    return <div className="navbar">
        <Link to='/'>
            <img id='logo1' src={Logo} />
        </Link>
         <Link to= '/Home'>LandingPage</Link>
         <Link to= '/MyList'>MyList</Link>
        <input value={search} onChange={handleChange}></input>
        <button onClick={handleSubmit}>search</button>
       
    </div>
}