import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1 className='text-5xl text-red-500 '>Hello Bangladesh</h1>
      <Outlet/>
    </div>
  )
}

export default App