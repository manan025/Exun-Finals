import React from 'react'
import '../Styles/Wallet.css'

//? Components
import Sidebar from '../Components/Sidebar'

const Wallet = () => {
  return (
    <>
    <div className="container flexbox">
        <Sidebar/>
    <div className="card">
        <h1>My Wallet</h1>
        <div className="credit">
            <h3>Total Balance</h3>
            <h2>$69,422.00 <span>USD</span></h2>
            <p>November 14 ,2022 <span>2.42% increase</span></p>
        </div>
    </div>
    <div className="transactions">
        <h1>Recent Transactions <span>see all</span></h1>
        <div className="money">
            <div className="img"><img src="" alt="" /></div>
            <div className="account">
                <h2>Kanye West</h2>
            </div>
            <div className="balance">
                <h4>+$33</h4>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Wallet
