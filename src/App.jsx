import { BrowserRouter } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Tooltip } from 'react-tooltip'

import './App.css'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zIndex : '1000'}}>
              <Tooltip anchorSelect='#setting-tooltip' content='Settings' place={'top'} style={{zIndex: '9999'}}/>
                  <button id='setting-tooltip' type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray'>
                    <FiSettings/>
                  </button>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
