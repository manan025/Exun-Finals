import React from 'react'
import '../Styles/Home.css'
import {Link, redirect, RedirectFunction} from 'react-router-dom'
import Cookies from 'universal-cookie'

function Home() {
  const cookie = new Cookies()

  const token = cookie.get('TOKEN')

  if (!token){
    window.location = '/login'
  }
  
  return(
    <div>Home</div>
  )
}

export default Home