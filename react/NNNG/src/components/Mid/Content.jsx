import './Content.css';
import { useState } from 'react';
import { content } from '../Datasets/content_box';
import { Image_button } from './image_button';

export function Content() {
    const itemsPerPage = 5;

    // Track state for each type
    const [state, setState] = useState(
        content.reduce((acc, cur) => {
            acc[cur.type] = { currentIndex: 0 };
            return acc;
        }, {})
    );

    function handlePrevIndex(type) {
        setState((prevState) => {
            const currentTypeState = prevState[type];
            const newIndex = 
                (currentTypeState.currentIndex - itemsPerPage + content.find(c => c.type === type).items.length) % content.find(c => c.type === type).items.length;

            return {
                ...prevState,
                [type]: { ...currentTypeState, currentIndex: newIndex },
            };
        });
    }

    function handleNextIndex(type) {
        setState((prevState) => {
            const currentTypeState = prevState[type];
            const newIndex = 
                (currentTypeState.currentIndex + itemsPerPage) % content.find(c => c.type === type).items.length;

            return {
                ...prevState,
                [type]: { ...currentTypeState, currentIndex: newIndex },
            };
        });
    }

    return (
        <>
            <div className="contentbox">
                {content.map((Content) => {
                    const { currentIndex } = state[Content.type];
                    const gamingItems = Content.items;

                    // Compute displayed content based on the current index
                    const displayedContent = gamingItems.slice(
                        currentIndex,
                        currentIndex + itemsPerPage
                    ).concat(
                        currentIndex + itemsPerPage > gamingItems.length
                            ? gamingItems.slice(0, (currentIndex + itemsPerPage) % gamingItems.length)
                            : []
                    );

                    return (
                        <ul key={Content.type} className="ul1" type="none">
                            <li className="li1">
                                <div className="ul1_content">
                                    <h5 className="content_heading">
                                        {Content.type}
                                        <Image_button
                                            className="content_button_logo"
                                            OnClick={(identifier) => {
                                                if (identifier === 'Next') handleNextIndex(Content.type);
                                                else handlePrevIndex(Content.type);
                                            }}
                                        />
                                    </h5>
                                </div>
                                <div className="item_setting">
                                    <div className="preitem">
                                        {displayedContent.map((item) => (
                                            <div key={item.id} className="item">
                                                <img
                                                    className="section_logo"
                                                    src={item.src}
                                                    alt="unavailable"
                                                />
                                                <span className="item_name">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    );
                })}
            </div>
        </>
    );
}
