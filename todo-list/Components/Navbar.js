import React from 'react'

const Navbar = (props) => {
  return (
    <>
      <nav className='px-5 h-14 text-xl bg-orange-300 flex justify-around items-center'>
        <div className="logo text-2xl">{props.user}</div>
        <ul className='flex justify-center gap-8 items-center'>
            <li>About</li>
            <li>Courses</li>
            <li>Connect</li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar
