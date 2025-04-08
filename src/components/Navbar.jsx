import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to="/" className='w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md font-bold'>
                <p className='blue-gradient_text'>NS</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to="/about" className={({isActive}) =>  isActive ? 'text-blue-500' : 'text-black-500' }>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black-500' }>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar