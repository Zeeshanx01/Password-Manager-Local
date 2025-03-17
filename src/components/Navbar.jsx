import React from 'react'
// import Logo from './logo'
const Navbar = () => {

    const handleRedirect = () => {
        // window.location.href = "https://github.com/Zeeshanx01";
        window.open("https://github.com/Zeeshanx01", "_blank", "noopener,noreferrer");
    };
    return (
        <nav className='bg-slate-800 flex text-white justify-evenly items-center h-[5vh] min-h-10 drop-shadow-xl p-1  fixed top-0 w-full z-30'>

            {/* <Logo /> */}
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-700'>&lt;</span>
                Pass
                <span className='text-green-700'>OP/&gt;</span>
            </div>

            {/* <ul className='flex gap-2 text-sm text-slate-300'>
                <a href="/"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/contact"><li>Contact</li></a>
            </ul> */}


            <button onClick={handleRedirect} className='bg-green-800 bg-blackl rounded-full flex justify-center items-center hover:bg-green-700'>
                <span><img className='w-8' src="icons/icons-github-cat.png" alt="" /></span>
                <span><img className='invert w-8 mr-1' src="icons/github-logo.png" alt="" /></span>
            </button>

        </nav>
    )
}

export default Navbar
