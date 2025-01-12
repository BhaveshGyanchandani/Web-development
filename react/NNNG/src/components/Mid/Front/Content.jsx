import './Content.css';
import { useState } from 'react';
import { content } from '../../Datasets/content_box';
import { Image_button } from './image_button';

export function Content() {
    const itemsPerPage = 5;

    // Initialize state to track the current index for each content type
    const [state, setState] = useState(
        content.reduce((acc, cur) => ({
            ...acc,
            [cur.type]: 0, // Start at index 0 for each type
        }), {})
    );

    // Function to handle "Previous" button click
    const handlePrevIndex = (type) => {
        setState((prevState) => {
            const totalItems = content.find((c) => c.type === type).items.length;
            const newIndex = (prevState[type] - itemsPerPage + totalItems) % totalItems;
            return { ...prevState, [type]: newIndex };
        });
    };

    // Function to handle "Next" button click
    const handleNextIndex = (type) => {
        setState((prevState) => {
            const totalItems = content.find((c) => c.type === type).items.length;
            const newIndex = (prevState[type] + itemsPerPage) % totalItems;
            return { ...prevState, [type]: newIndex };
        });
    };

    return (
        <div className="contentbox">
            {content.map(({ type, items }) => {
                const currentIndex = state[type];
                
                // Calculate the items to display
                const displayedItems = [
                    ...items.slice(currentIndex, currentIndex + itemsPerPage),
                    ...items.slice(0, Math.max(0, (currentIndex + itemsPerPage) - items.length)),
                ];

                return (
                    <ul key={type} className="ul1">
                        <li className="li1">
                            <div className="ul1_content">
                                <h5 className="content_heading">
                                    {type}
                                    <Image_button
                                        className="content_button_logo"
                                        OnClick={(action) => {
                                            if (action === 'Next') handleNextIndex(type);
                                            else handlePrevIndex(type);
                                        }}
                                    />
                                </h5>
                            </div>
                            <div className="item_setting">
                                <div className="preitem">
                                    {displayedItems.map(({ id, src, name }) => (
                                        <div key={id} className="item">
                                            <img className="section_logo" src={src} alt="unavailable" />
                                            <span className="item_name">{name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                );
            })}
        </div>
    );
}
