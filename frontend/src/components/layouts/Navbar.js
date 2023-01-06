import React, { Fragment } from 'react'

const Navbar = () => {
  return (
    <Fragment>
      <nav className='flex justify-between content-center items-center h-16 pl-4 pr-4'>
        <div className='w-1/5'>
          <div>
            <img src='./images/logo.jpg' alt="brand logo" className='w-16' />
          </div>
        </div>

        <div className='flex w-3/5 align-middle content-center justify-center'>
          <div className='flex '>
            <input type="text"
              id="search_field"
              placeholder='Enter Product name...'
              className='rounded-3xl w-96 px-4 mx-2 outline-slate-600 border-2 border-solid' />

            <div>
              <button id="search_btn" className='w-8 h-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-500 rounded-full hover:bg-slate-600 hover:text-white hover:p-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className='flex w-1/5 justify-center align-middle content-center'>
          <button id='login_btn' className=' text-center mx-4 bg-slate-600 px-4 py-1 rounded-3xl font-semibold text-white'>Login</button>
          <button className='flex px-1 py-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#475569" class="w-6 h-6">
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg><span className='pl-1 text-slate-800'>Cart</span>
          </button>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar