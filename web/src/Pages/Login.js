import React, {useState} from 'react'
import '../Styles/Auth.css'
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie'

function Login() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const cookie = new Cookies()

  const submit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: pass
    }

    fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      cookie.set('TOKEN', data.token, {path: '/'})
      document.getElementById('home').click()
    })
  }

  return (
    <>
    <Link to='/' id='home' />
    <div className='split'>
      <div className='circle' />
      <div className='left'>
        <h1>Welcome to the Office!</h1>
        <p>Log in to access the dashboard</p>

        <form onSubmit={submit}>
          <label>Email Address</label>
          <div className='input'>
            <input type='email' name='email' placeholder='core@exun.com' required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <br />
          <label>Password</label>
          <div className='input'>
            <input type='password' name='pass' placeholder='husssshhhhh.....' required value={pass} onChange={e => setPass(e.target.value)} />
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