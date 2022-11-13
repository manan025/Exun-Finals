import '../Styles/Components.css'
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiFillCompass,
    AiFillSetting,
    AiOutlineUser,
  } from "react-icons/ai";
import { BsDisc } from "react-icons/bs";
import {FiLogOut} from 'react-icons/fi'
import { Link } from "react-router-dom";


function Menu({highlight}) {

  const logout = () => {
    localStorage.removeItem('groovyuser')
    window.location = '/'
  }

  return (
    <div className="menu">
          <Link to="/">
           <h2>the office</h2>
          </Link>

          <ul>
            <h3>Menu</h3>

            <Link to="/community">
              <li>
                <AiOutlineHome size={20} />
                <span>Home</span>
              </li>
            </Link>

            <Link to="/wallet" style={highlight=='groovy'? {opacity: 1} : {}}>
              <li>
                <BsDisc size={18} />
                <span>wallet</span>
              </li>
            </Link>

            <Link to="/project">
              <li>
                <AiOutlineSearch size={20} />
                <span>project</span>
              </li>
            </Link>

            <Link to="/email">
              <li>
                <AiFillCompass size={20} />
                <span>Intra Mail</span>
              </li>
            </Link>

            <hr />

            <Link to="/community">
              <li className='gg'>
                <AiFillSetting size={20} />
                <span>Settings</span>
              </li>
            </Link>

            <Link to="" style={{color: '#CB303B', opacity: 1, position: 'absolute', bottom: 10, left: 47}} onClick={logout}>
              <li className='logout'  >
                <FiLogOut size={32} />
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        </div>
  )
}

export default Menu