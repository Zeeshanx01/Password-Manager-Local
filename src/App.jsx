import { useState } from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <div className='mt-12 2xl:mt-16'>
        {/* <div className="absolute top-0 -z-10 h-full w-full bg-white"> */}
          {/* <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-800 opacity-20 blur-[80px]"> */}

            <Manager />
          {/* </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </>
  )
}

export default App
