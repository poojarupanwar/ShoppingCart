import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarPanel from './NavBarPanel'
import {Provider} from 'react-redux'
import { store } from './store'
const Navbar = () => {
  return (
    <>
    <Provider store={store}>
    <NavBarPanel/>
    <Outlet></Outlet>
    </Provider>
    
    </>
  )
}

export default Navbar