import { useState } from 'react';
import './All.css';
import { Sidebar } from './Sidebar';
import { Link } from 'react-router-dom';
import { All_data } from '../Datasets/For_All_in_Nav';

export function All() {
  const [state, setState] = useState(false);
  const [HoverState, setHoverstate] = useState(null);
  const TitleArray = ["Bottles & Flasks", "Casseroles", "Cooking ware", "Glassware", "Lunchboxes", "Storage containers", "Home Essentials", "Wedding Gifts"];
  const HoveredArray = ["Bottles & Flasks", "Casseroles", "Cooking ware", "Glassware", "Lunchboxes", "Storage containers", "Home Essentials", "Wedding Gifts"];

  const handlestate = () => setState(!state);
  const handleHoverItem = (index) => setHoverstate(index);
  const handleHoverItemOnLeave = () => setHoverstate(null);

  const List = ({ item, isHovered }) => {
    if (!isHovered) return null; // Avoid rendering unnecessary elements
  
    return (
      <div className="HoveredList">
        {item.Data.map((content, id) => (
          <Link key={id} to={`/${content}`} className="HoveredSpanLink">
            <span className="HoveredSpan">{content}</span>
          </Link>
        ))}
      </div>
    );
  };
  
  return (
    <>
      <div id="all">
        <div onClick={handlestate} id="alltray">
          <svg
            id="allogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#ffffff"
            fill="none"
          >
            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span id="allfont">All</span>
        </div>

        {All_data.map((item, index) => (
          <ul
            onMouseEnter={() => handleHoverItem(index)}
            onMouseLeave={handleHoverItemOnLeave}
            className="HoverItem"
            key={index}
          >
            <span className="today">{item.Title}</span>
            <List item={item} isHovered={HoverState === index} />
          </ul>
        ))}
      </div>

      <Sidebar state={state} setState={setState} />
    </>
  );
}
