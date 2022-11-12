import React from 'react'
import '../Styles/Auth.css'
import {Link} from 'react-router-dom';

function Login() {
  return (
    <>
    <div className='split'>
      <div className='circle' />
      <div className='left'>
        <h1>Welcome to the Office!</h1>
        <p>Log in to access the dashboard</p>

        <form>
          <label>Email Address</label>
          <div className='input'>
            <input type='email' name='email' placeholder='core@exun.com' required />
          </div>
          <br />
          <label>Password</label>
          <div className='input'>
            <input type='password' name='pass' placeholder='husssshhhhh.....' required />
          </div>
          <Link to='#'>Forgot Password?</Link> <br/>

          <button>Sign In</button>
        </form>

        <span>Already have an account?<Link to='/register' style={{color: '#00B929'}}>Sign Up</Link></span>
      </div>

      <div className='right'>
        <img src='images/login.png' />
      </div>
    </div>
    </>
  )
}

export default Login