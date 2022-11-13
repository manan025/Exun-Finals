import React from 'react'
import '../Styles/Home.css'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie'
import calander from '../static/calander.png'
//? Components
import Sidebar from '../components/Sidebar'

function Home() {
  const cookie = new Cookies()

  const token = cookie.get('TOKEN')

  if (!token){
    window.location = '/login'
  }
  
  return(
    <>
     <div className="split">
        <Sidebar highlight={"groovy"} />
        <div className="container" >

    <div className="projects">
      <div className="oof">
      <h1>Projects</h1>
      <p>You have 3 projects</p>
      </div>
      <div className="new">
      <div className="button">
        <button>+ New Project</button>
      </div>
      </div>
    </div>
    <div className="mains">
      <div className="main1">
        <h3>Website Redesign-
Krypto Project</h3>
<p>Progress: 70%</p>
<div className="flexi">
<div className="progress"></div><div className="progress"></div><div className="progress2"></div><div className="progress2"></div>

</div>
      </div>
      <div className="main1 bg">
        <h3>Website Redesign-
Krypto Project</h3>
<p>Progress: 70%</p>
<div className="flexi">
<div className="progress2"></div><div className="progress2"></div><div className="progress"></div><div className="progress2"></div>
</div>
      </div>
      <div className="main1">
        <h3>Website Redesign-
Krypto Project</h3>
<p>Progress: 70%</p>
<div className="flexi">
<div className="progress"></div><div className="progress"></div><div className="progress2"></div><div className="progress2"></div>

</div>
      </div>
    </div>
    <div className="hm">
      <img src={calander} alt="" />
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Home