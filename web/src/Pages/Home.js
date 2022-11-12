import React from 'react'
import '../Styles/Home.css'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie'

//? Components
import Sidebar from '../Components/Sidebar'

function Home() {
  const cookie = new Cookies()

  const token = cookie.get('TOKEN')

  if (!token){
    window.location = '/login'
  }
  
  return(
    <>
    <Sidebar />
    </>
  )
}

export default Home