import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Mail.css';
import {FaUserCircle, FaInbox} from 'react-icons/fa'
import {BsArrowLeftCircle, BsStarFill} from 'react-icons/bs'
import {MdLabelImportantOutline, MdSend} from 'react-icons/md'

function Mail() {
  return (
    <div className='main'>
        <div className='options'>
            <Link to='/' className='icons'><BsArrowLeftCircle size={40}/></Link>
            <FaInbox className='icons' size={30} />
            <MdLabelImportantOutline className='icons' size={30} />
            <BsStarFill className='icons' size={30} />
            <MdSend className='icons' size={30} />
        </div>

        <div className='mails'>
            <div className='head'>
                <h1>My Mail</h1>
            </div>
            <ul>
                <li>
                    <h1>CORE</h1>
                    <h3>core.exun@coreisus.co</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
                </li>
                <hr />

                <li>
                    <h1>CORE</h1>
                    <h3>core.exun@coreisus.co</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
                </li>
                <hr />

                <li>
                    <h1>CORE</h1>
                    <h3>core.exun@coreisus.co</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
                </li>
                <hr />

                <li>
                    <h1>CORE</h1>
                    <h3>core.exun@coreisus.co</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
                </li>
                <hr />

                <li>
                    <h1>CORE</h1>
                    <h3>core.exun@coreisus.co</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
                </li>
                <hr />

                <li>
                    <h1>CORE</h1>
                    <h3>core.exun@coreisus.co</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
                </li>
                <hr />
            </ul>
        </div>

        <div className='main-area'>
            <h1>CORE</h1>

            <div className='flex'>
                <FaUserCircle size={30} id='profile'/>
                <h2>
                    core.exun@coreisus.co <br/>
                    <span>to me</span>
                </h2>
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus elit, pulvinar sed molestie sit amet, facilisis ac erat. Cras nec consequat ligula. Vestibulum tristique, nisl eu commodo laoreet, risus magna lacinia magna, at mattis nulla dui id augue. Nulla eget ipsum at purus congue ornare sed at magna. Pellentesque et tortor aliquam, pellentesque justo ac, eleifend nulla. Proin ipsum ante, porttitor sed posuere eget, porttitor eget ligula. Cras ut sapien nulla.
                <br/>
                <br/>

                Aliquam commodo turpis a libero volutpat auctor. Ut neque mi, volutpat eu ligula tincidunt, aliquam rutrum leo. Nam aliquam congue ultricies. In tincidunt diam justo, a maximus elit rutrum et. Duis pharetra nisl quis ante blandit condimentum. Morbi tellus tellus, accumsan vitae urna nec, posuere feugiat tellus. Nunc tellus velit, tincidunt et condimentum vitae, fringilla eget magna. Etiam maximus eros ac nunc dapibus convallis. Aliquam imperdiet erat leo, in consectetur sem lobortis vitae.
                <br/>
                <br/>

                Suspendisse eget metus sit amet ligula elementum porta. Maecenas congue aliquam venenatis. Nunc vitae enim nisi. Maecenas lacinia lobortis massa, nec tempor odio hendrerit ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras risus libero, tristique eu porta sed, consequat a mi. Sed vitae dui et urna bibendum consequat. Duis hendrerit porta lorem vel consectetur. Mauris vestibulum lorem mollis, tristique tortor efficitur, suscipit felis. Fusce vitae nisi et sem cursus facilisis nec sit amet velit. Aenean rhoncus ac ante fermentum sagittis. 
            </p>
        </div>
    </div>
  )
}

export default Mail