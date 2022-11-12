import { RiListCheck2, RiTaskLine, RiFileUserLine } from "react-icons/ri";
import {GiChocolateBar} from 'react-icons/gi'
import {GrUserWorker} from 'react-icons/gr'
import '../Styles/Components.css'

const Sidebar = () => {
    let links = [
      {
        name: 'DASHBOARD',
        link: '/',
        icon: <RiListCheck2/>,
    },
    {
        name: 'TASKS',
        link: '/tasks',
        icon: <RiTaskLine/>,
    },
    {
        name: 'STOCK',
        link: '/stock',
        icon: <GiChocolateBar/>,
    },
    {
        name: 'EMPLOYEES',
        link: '/employee',
        icon: <GrUserWorker/>,
    },
    {
        name: 'CCTV Footage',
        link: '/camera',
        icon: <RiFileUserLine/>,
    }
]
  return ( 
    <>
      <div className="sidebar">
        <div className="name">
            <h1>theoffice.com</h1>
        </div>
        <div className="links">

        </div>
      </div>
    </>
  )
}

export default Sidebar
