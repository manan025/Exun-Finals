import React from 'react'
import '../Styles/Auth.css'
import {Link} from 'react-router-dom';

function Register() {
  return (
    <>
    <div className='split'>
      <div className='circle' />
      <div className='left'>
        <h1>Create your Account</h1>
        <p>Start your journey with us.</p>

        <form>
          <label>Name</label>
          <div className='input'>
            <input type='text' name='name' placeholder='Core Exun' required />
          </div>
          <br/>
          <label>Email Address</label>
          <div className='input'>
            <input type='email' name='email' placeholder='core@exun.com' required />
          </div>
          <br />
          <label>Password</label>
          <div className='input'>
            <input type='password' name='pass' placeholder='husssshhhhh.....' required />
          </div>

          <button>Sign Up</button>
        </form>

        <span>Don't have an account?<Link to='/login' style={{color: '#00B929'}}>Sign In</Link></span>
      </div>

      <div className='right'>
        <img src='images/register.png' />
      </div>
    </div>
    </>
  )
}

export default Register