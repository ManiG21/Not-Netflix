import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo1.gif'
import { useState } from 'react'

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

    return <div className="navbar">
        <Link to='/'>
            <img id='logo1' src={Logo} />
        </Link>
        <input value={search} onChange={handleChange}></input>
        <button onClick={handleSubmit}>search</button>
    </div>
}