import Nav from "../../../Navbar/Nav";
import { LeftItem } from "./LeftItem";
import { MidItem } from "./MidItem";
import { RightItem } from "./RightItem";
import './Individual_Item_template.css';
import { createContext, useContext, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ItemImg } from "../../../../ContextHooks";

export function Individual_Item_template() {
    const [Index, setIndex] = useState({ currentIndex: 0 });
    const [Name, setImage] = useState();
    const { aboutId } = useParams();

    // Stabilize the context value with useMemo
    const contextValue = useMemo(() => ({ Index, setIndex, Name, setImage }), [Index, Name]);

    return (
        <>
            <Nav />
            <ItemImg.Provider value={contextValue}>
                <div className="DKinitial_box">
                    
                    <LeftItem aboutId={aboutId} />
                    <div className="DKbelow_box">
                        <MidItem />
                        <RightItem />
                    </div>
                </div>
                  
            </ItemImg.Provider>
        </>
    );
}
