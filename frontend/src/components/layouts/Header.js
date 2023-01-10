import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
      <header className='flex justify-between content-center items-center h-16 pl-4 pr-4 shadow-sm shadow-amber-yellow'>
        <div className='w-1/5'>
          <div className='flex justify-between content-center align-middle w-20'>
            <img src='./images/logo.png' alt="brand logo" className='w-8 mx-1' />
            <span className=' text-2xl font-bold text-slate-700'>ShopIT</span>
          </div>
        </div>

        <div className='flex w-3/5 align-middle content-center justify-center'>
          <div className='flex align-middle content-center'>
            <input type="text"
              id="search_field"
              placeholder='Enter Product name...'
              className='rounded-full w-4/5 h-8 px-4 mx-2 border-slate-400 border-2 border-solid' />


            <button id="search_btn" className='transition ease-in-out delay-100 hover:scale-125 duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 hover:bg-amber-yellow hover:text-slate-600 rounded-full bg-slate-600 text-amber-yellow p-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div>

        <div className='flex w-1/5 h-8 justify-center align-middle content-center '>
          <button id='login_btn' className='text-center mx-4 bg-slate-600 px-4 py-1 rounded-3xl font-semibold text-amber-yellow transition ease-in-out delay-100 hover:scale-110 duration-300 hover:bg-amber-yellow hover:text-slate-600'>
            Login
          </button>

          <button id='cart_btn' className='text-center mx-4 bg-slate-600 px-4 py-1 rounded-3xl font-semibold text-amber-yellow transition ease-in-out delay-100 hover:scale-110 duration-300 hover:bg-amber-yellow hover:text-slate-600'>
            {/* <span>           */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            {/* </span> */}
          </button>
        </div>
      </header>
    </Fragment>
  )
}

export default Header