import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="bg-white p-2 px-md-2 px-lg-5 py-lg-3">
                <Link to="">
                    <h3 className="text-success logo">My Schedule!</h3>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
