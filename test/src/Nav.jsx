import { useState } from "react";
import { Button } from "./button";
import { Li } from "./li";
export function Nav(){

    const [menu , setMenu] = useState("menu")
    const [isopen , setIsOpen] = useState(false)

    function toggleDropdown (){
        setIsOpen(!isopen)
    }

    function handlemenu(name){
        setMenu(name)
        setIsOpen(false)
    }

    return (
        <>
            <Button menu={menu} toggleDropdown={toggleDropdown} />
            <Li isopen={isopen} handlemenu={handlemenu} />
        
        </>
    )
}
