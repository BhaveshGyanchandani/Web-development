import React from "react";
import './Button.css'
export function Button({menu , toggleDropdown}) {
    
    return (
        <>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <span className="dropdown-span">{menu}</span>
            </button>
            
        </>
    )
}
