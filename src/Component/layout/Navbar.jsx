import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import  PropTypes from 'prop-types'


function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content' >
        <div className="container mx-auto">
            <div className="flex-none px2 mx2">
                <Link to='/' className='text-lg font-bold align-middle'>
                    <FaGithub className='inline pr-2 text-3xl'/>
                    {title}
                </Link>
            </div>
        </div>


        <div className="felx-1 px-2 mx-2 ">
                <div className="flex justify-end">
                    <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                        Home
                    </Link>
                    <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                        About
                    </Link>
                </div>
            </div>
        
    </nav>
  )
}

Navbar.defaultProps = {
  title:'GitHub Finder'
}

Navbar.propTypes ={
    title: PropTypes.string
}

export default Navbar