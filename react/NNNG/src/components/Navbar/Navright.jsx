import { useContext } from 'react'
import './Navright.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../ContextHooks'
export default function Navright() {

  const {Items} = useContext(CartContext)
  
  return (
    <>
      <div className="nav-right">
        <div className="signIN">
          <span id="Hello">Sign in</span><br />
        </div>
        <Link style={{width:"44px"}} to="/E-commerce-website/cart">
        <div id="cart">
          <svg id="carticon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width="24" height="24" color="#fefefe" fill="none">
            <path
              d="M8 16.0001H15.2632C19.7508 16.0001 20.4333 13.1809 21.261 9.06916C21.4998 7.8832 21.6192 7.29022 21.3321 6.89515C21.1034 6.58048 20.7077 6.51645 20 6.50342"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M9 6.5H17M13 10.5V2.5" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" />
            <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round" />
            <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor"
              strokeWidth="1.5" />
            <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor"
              strokeWidth="1.5" />
          </svg>
            <p>{Items.items.length>0 ? Items.items.length : '' }</p>
        </div>
        </Link>
      </div>
    </>
  )
}