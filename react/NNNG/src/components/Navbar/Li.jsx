import './Li.css'
export function Li({isopen , handlemenu}) {
    if (!isopen) return null;    
        return (
            <>
            <ul
                id="dropdown-menu"
                style={{ display: isopen ? "block" : "none" }} >
                <li className="dropdown-item selected " onClick={ ()=> handlemenu("All")}>All</li>
                <li className="dropdown-item" onClick={ ()=> handlemenu("call")}>call</li>
            </ul>
            </>
        )
    
}