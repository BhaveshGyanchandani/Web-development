import { useState } from 'react'
import './All.css'
import { Sidebar } from './Sidebar'
export function All() {

  const [state, setState] = useState(false)

  function handlestate() {
    setState(!state)
  }

  return (
    <>
      <div id="all">
        <div  onClick={handlestate} id="alltray">
          <svg id="allogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
            height="24" color="#ffffff" fill="none">
            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span id="allfont">All</span>
        </div>

        <span className="today">Today's Deals</span>

      </div>


      <Sidebar state={state} setState={setState} />
      </>
  )
}