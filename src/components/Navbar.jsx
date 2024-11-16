import React from 'react'
import Logo from './logo'
const Navbar = () => {
    return (
        <nav className='bg-slate-800 flex text-white justify-evenly items-center h-[5vh] min-h-10 drop-shadow-xl'>

            <Logo />

            <ul className='flex gap-2 text-sm text-slate-300'>
                <a href="/"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/contact"><li>Contact</li></a>
            </ul>

        </nav>
    )
}

export default Navbar
