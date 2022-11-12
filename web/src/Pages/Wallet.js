import React from 'react'
import '../Styles/Wallet.css'
import kanye from '../static/kanye.jpg'
import kanye2 from '../static/kanye2.png'
const Wallet = () => {
  return (
    <>
    <div className="grid">

        <div className="column">
    <div className="card">
        <h1>My Wallet</h1>
        <div className="credit">
            <h3>Total Balance</h3>
            <h2>$69,422.00 <span>USD</span></h2>
            <p>November 14 ,2022 <span>2.42% ^</span></p>
        </div>
    </div>
    <div className="transactions">
        <h1>Recent Transactions <span>see all</span></h1>
        <div className="money">
            <div className="account">
            <img src={kanye} alt="" />
            <div className="bhai">
            <h2>Kanye West</h2>
                <p>Heartless</p>        
            </div>
        
            </div>
            <div className="balance">
                <h4>+$33</h4>
            </div>
        </div>
        <div className="money">
            <div className="account">
            <img src={kanye} alt="" />
            <div className="bhai">
            <h2>Kanye West</h2>
                <p>Heartless</p>        
            </div>
        
            </div>
            <div className="balance">
                <h4>+$33</h4>
            </div>
        </div>
        <div className="money">
            <div className="account">
            <img src={kanye} alt="" />
            <div className="bhai">
            <h2>Kanye West</h2>
                <p>Heartless</p>        
            </div>
        
            </div>
            <div className="balance">
                <h4>+$33</h4>
            </div>
        </div>
        
    </div>
    </div>
    <div className="column2">
        <div className="profile">
            <h1>My Profile</h1>
            <div className="kanyeG">
                <div className="img">
                    <img src={kanye2} alt="" />
                </div>
                <div className="info">
                    <p><span>Kanye West</span></p>
                    <p><span>Email</span>    kanyeG@jenner.com</p>
                    <p><span>Office</span>    N**as in Paris</p>
                </div>
            </div>
        </div>
        <div className="card">
            <h1>Card Actions</h1>
            <div className="action">
                <div className="content">
                    <div className="icons">
                        <BiTransfer size="50px" className='icon'/>
                    </div>
                    <div className="text">
                        <p>Tranfer</p>
                    </div>
                </div>
                <div className="content">
                    <div className="icons">
                        <MdOutlinePayment size="50px" className='icon'/>
                    </div>
                    <div className="text">
                        <p>Payment</p>
                    </div>
                </div>
            </div>
            <div className="action">
                <div className="content">
                    <div className="icons">
                        <AiOutlineShoppingCart size="50px" className='icon'/>
                    </div>
                    <div className="text">
                        <p>Purchase</p>
                    </div>
                </div>
                <div className="content">
                    <div className="icons">
                        <FiMoreHorizontal size="50px" className='icon'/>
                    </div>
                    <div className="text">
                        <p>More</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Wallet
