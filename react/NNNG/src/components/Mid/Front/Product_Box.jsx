import { useState } from 'react';
import './Product_Box.css';
import { Items } from '../../Datasets/Item_for_Item_box';
// import { Content_on_hover } from './content_on_hover';
import { Link } from 'react-router-dom';

export function Product_Box() {
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (id) => setHoveredItemId(id);
    const handleMouseLeave = () => setHoveredItemId(null);

    const ArrowIcon = ({ isHovered }) => (
        <svg
            className="svglogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 17"
            width="14"
            height="14"
            color="#000000"
            fill="none"
        >
            <path
                d="M17 4L8.66943 10.0405C6.44352 11.6545 6.44353 12.3455 8.66943 13.9595L17 20"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform={isHovered ? 'rotate(180 12.5 12.5)' : 'rotate(90 12.5 12.5)'}
            />
        </svg>
    );

    return (
        <div className="Item_container">
            <ul>
                {Items.map((item) => (
                    <Link key={item.id}  to={`/E-commerce-website/${item.category}`}>
                        <li
                            className="item"
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={item.src} alt={item.category} />
                            <span>
                                {item.category}{' '}
                                {/* {item.arrow && <ArrowIcon isHovered={hoveredItemId === item.id} />} */}
                            </span>
                        </li>
                        
                    </Link>
                ))}
            </ul>
        </div>
    );
}
