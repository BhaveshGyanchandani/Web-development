import { useState } from "react";
import React from "react";
import { Li } from "./li";

export function Button({menu , toggleDropdown}) {
    
    return (
        <>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              {menu}
            </button>
            
        </>
    )
}