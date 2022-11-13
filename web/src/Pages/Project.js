import React from 'react'
import '../Styles/Project.css'

//? Components
import Sidebar from '../components/Sidebar'

function Project() {
  return (
    <>
    <Sidebar />
    <main>
        <h5>Dashboard / Projects / <span style={{color:'#00B929'}}>Sample Project</span></h5>

        <div className='project'>
            <h1>Sample Project</h1>

            <div className='flex' style={{width: '40%'}}>
                <span className='active'>Tasks</span>
                <span>Messages</span>
                <span>Files</span>
                <span>Manage</span>
            </div>

            <tab style={{display: 'none'}}>
                <div className='flex task-container'>
                    <div className='tasks'>
                        <label>ToDo:</label>

                        <div className='task'>
                            Input Fields

                            {/* <div classname='' */}
                        </div>
                    </div>

                    <div className='tasks'>
                        <div className='task'></div>
                    </div>

                    <div className='tasks'>
                        <div className='task'></div>
                    </div>
                </div>
            </tab>

            <tab>
                <div className='files'>
                    <div className='flex' >
                        <ul>
                            <li id='upload'>Upload File +</li>
                            <li>File one</li>
                            <li>File two</li>
                            <li>File three</li>
                            <li>File four</li>
                            <li>File five</li>
                        </ul>

                        <iframe src='https://vanshpro.co' />
                    </div>
                </div>
            </tab>
        </div>
    </main>
    </>
  )
}

export default Project