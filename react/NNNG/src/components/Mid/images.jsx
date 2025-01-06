import { useState } from "react";
import './images.css';
import { Image } from "../Datasets/image";
import { Image_button } from "./image_button";
// import { Content } from './Content'


export function Images() {
    const [CurImage, setCurImage] = useState(0);

    function handlePrevIndex() {

        setCurImage((prevIndex) => (prevIndex - 1 + Image.length) % Image.length);
    }

    function handleNextIndex() {
        setCurImage((prevIndex) => (prevIndex + 1) % Image.length);
    }

    return (
        <div className="images-container">
            <Image_button className="button_logo" OnClick={(identifier) => {
                if (identifier === 'Prev') { handlePrevIndex() }
                else handleNextIndex()
            }} />
            <ul className="image-gallery">
                <div>
                    {Image.map((image, index) => (
                        <li
                            key={image.id}
                            className={`bgimagebg ${index === CurImage ? 'active' : ''}`}
                            style={{ display: index === CurImage ? 'block' : 'none' }}
                        >
                            <img className="contentlogo" src={image.src} alt={`Image ${image.id}`} />
                        </li>
                    ))}


                </div>

            </ul>
        </div>
    );
}
