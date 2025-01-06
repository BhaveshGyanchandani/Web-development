import './Sidebar.css';
import { DUMMY_PRODUCTS, By_brand, By_dept } from './Dummy_set';
import user_icon from '../../assets/user_icon.png';
import { useEffect, useRef } from 'react';

export function Sidebar({ state, setState }) {
    const sidebarRef = useRef(null);



    function handleSidebarClose() {
        setState(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setState(false); // Close the sidebar if clicked outside
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setState]);

    return (
        <>
            {state && (
                <div
                    className="overlay"
                    onClick={handleSidebarClose} // Clicking on the overlay will close the sidebar
                ></div>
            )}

            <div
                className="sidebar"
                ref={sidebarRef}
                style={{ display: state ? 'block' : 'none' }}
            >
                <button className="close" onClick={handleSidebarClose}>
                    <span style={{ fontSize: '30px', fontWeight: 'bolder' }}>X</span>
                </button>
                <div className="Hello">
                    <div className="Hello_sign">
                        <img src={user_icon} alt="not available" />
                        <span>Hello there</span>
                    </div>
                </div>

                <div>
                    {DUMMY_PRODUCTS.map((item) => (
                        <div key={item.id}>
                            <ul className="sidebar_ul">
                                
                                <span className="sidebar-name">{item.title}</span>
                                {item.category === 'brand' ? (
                                    By_brand.map((brandItem) => (
                                        <a key={brandItem.id}>
                                            
                                            <li className="Sidebar_item">
                                                <span>{brandItem.title}</span>
                                            </li>
                                        </a>
                                    ))
                                ) : (
                                    By_dept.map((deptItem) => (
                                        <a key={deptItem.id}>
                                            
                                            <li className="Sidebar_item">
                                                <span>{deptItem.title}</span>
                                            </li>
                                        </a>
                                    ))
                                )}
                            </ul>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
