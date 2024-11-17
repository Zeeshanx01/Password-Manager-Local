import React from 'react'
import { useRef, useState, useEffect } from 'react'




const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: '', username: '', password: '' })
  const [passwordArray, setPasswordArray] = useState([])




  useEffect(() => {
    // ? if passwords present in local storage, then load passwords...
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])





  const showPassword = () => {
    console.log("Show Password")
    if (ref.current.src.includes("icons/eye-close.gif")) {
      ref.current.src = "icons/eye-open.gif"
      passwordRef.current.type = 'text'
    }
    else {
      ref.current.src = "icons/eye-close.gif"
      passwordRef.current.type = 'password'
    }
  }



  
  const copyText = (text) => {
    alert('Copied to clipboard: "' + text + '"')
    navigator.clipboard.writeText(text)
  }



  const savePassword = () => {
    // alert("Saved")
    // console.log(form)
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log([...passwordArray, form])
  }



  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <>
      {/* bg-[rgba(173,109,244,0.5)] */}
      <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-800 opacity-20 blur-[80px]"></div>
      </div>

      <div className="logo font-bold text-Black text-2xl text-center">
        <span className='text-green-700'>&lt;</span>
        Pass
        <span className='text-green-700'>OP/&gt;</span>
      </div>

      <p className='text-green-900 font-bold text-xs text-center'>Your own Password Manager</p>


      <div className="bg-stone-100 drop-shadow-2xl mx-auto my-4 max-sm:mx-4 max-w-4xl rounded-xl">

        <div className=' flex flex-col p-4 gap-2 iitems-center'>

          <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-700 w-full text-green-900 font-boldd text-sm px-2 py-1' type="text" name='site' id='' />

          <div className='flex gap-3'>

            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-700  w-full text-green-900 font-boldd text-sm px-2 py-1' type="text" name='username' id='' />

            <div className="relative flex items-center">

              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-700 w-full min-w-[27vw] text-green-900 font-boldd text-sm px-2 py-1 pr-[26px] ' type='password' name='password' id='' />
              <span onClick={showPassword} className='absolute right-1 top-[6px] bg-white cursor-pointer text-xs text-center bg-green-1000 rounded-full'>
                <img ref={ref} width={20} src="icons/eye-close.gif" alt="" />
              </span>

            </div>

          </div>

          <div className='bg-slate-3000 w-full flex justify-end'>

            <button onClick={savePassword} className='flex justify-center items-center bg-green-500 rounded-full  px-6 py-1 mx-auto0 text-xs font-bold hover:bg-green-400 gap-2'><lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="loop" colors="primary:#000000"></lord-icon>Add Password</button>

          </div>

        </div>
      </div>







      <div className='max-w-4xl max-sm:mx-4 mx-auto text-green-900 font-bold ' >
        <h2>Your Passwords:</h2>
      </div>











      <div className=" bg-green-100 drop-shadow-2xl mx-auto my-4 mt-1 max-sm:mx-4 max-w-4xl min-h-[13rem] rounded-xl overflow-hidden">

        <table classname="table-auto w-full">

          <thead className='bg-green-800 text-white '>
            <tr>
              <th className='text-center w-[50%] p-2'>Website</th>
              <th className='text-center w-60 p-2'>Username</th>
              <th className='text-center w-52 p-2'>Password</th>
            </tr>
          </thead>


          {passwordArray.length != 0 && <tbody>

            {passwordArray.map((item, index) => {

              return <tr key={index}>

                <td className='text-center border border-white p-2 '>

                  <div className="flex justify-center items-center">

                    <a href={item.site} target='_blank'> {item.site}</a>

                    <div className='cursor-pointer' onClick={() => { copyText(item.site) }}>
                      {/* , 'paddingTop':'3px' */}
                      <lord-icon
                        style={{ width: '15px', 'paddingTop': '3px', 'padding-left': '8px' }}
                        src="https://cdn.lordicon.com/depeqmsz.json"
                        trigger="hover">
                      </lord-icon>
                    </div>

                  </div>

                </td>

                <td className='text-center border border-white p-2'>

                  <div className="flex justify-center items-center">

                    <span>{item.username}</span>

                    <div className='cursor-pointer' onClick={() => { copyText(item.username) }}>
                      <lord-icon
                        style={{ width: '15px', 'paddingTop': '3px', 'padding-left': '8px' }}
                        src="https://cdn.lordicon.com/depeqmsz.json"
                        trigger="hover">
                      </lord-icon>
                    </div>

                  </div>

                </td>

                <td className='text-center border border-white p-2 flex justify-center items-center'>

                  <div className="flex justify-center items-center">

                    <span>{item.password}</span>

                    <div className='cursor-pointer' onClick={() => { copyText(item.password) }}>
                      <lord-icon
                        style={{ width: '15px', 'paddingTop': '3px', 'padding-left': '8px' }}
                        src="https://cdn.lordicon.com/depeqmsz.json"
                        trigger="hover">
                      </lord-icon>
                    </div>

                  </div>

                </td>

              </tr>

            })}

          </tbody>}

        </table>

        {passwordArray.length === 0 && <div className='text-center m-4 text-lg' >No Passwords to show</div>}





      </div>



    </>
  )
}

export default Manager
