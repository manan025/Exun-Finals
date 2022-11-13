import React, {useState} from 'react'
import '../Styles/Auth.css'
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie'

function Register() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const cookie = new Cookies()
  cookie.remove('TOKEN', {path: '/'})

  const submit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
      password: pass
    }

    fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <>
    <div className='split1'>
      <div className='circle' id='register-circle' />
      <div className='left'>
        <h1>Create your Account</h1>
        <p>Start your journey with us.</p>

        <form onSubmit={submit}>
          <label>Name</label>
          <div className='input'>
            <input type='text' name='name' placeholder='Core Exun' required value={name} onChange={e => setName(e.target.value)} />
          </div>
          <br/>
          <label>Email Address</label>
          <div className='input'>
            <input type='email' name='email' placeholder='core@exun.com' required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <br />
          <label>Password</label>
          <div className='input'>
            <input type='password' name='pass' placeholder='husssshhhhh.....' required value={pass} onChange={e => setPass(e.target.value)} />
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