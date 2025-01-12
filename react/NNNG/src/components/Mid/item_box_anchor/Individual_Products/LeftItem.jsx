import { useContext } from 'react';
import { ItemImg } from '../../../../ContextHooks';
import './LeftItem.css';
import { Image_button } from '../../Front/image_button';
import { Product } from "../../../Datasets/Products/Final_Test_Product";
import { useParams } from 'react-router-dom';

export function LeftItem({ aboutId }) {
    const itemsPerPage = 3;
    const {id} = useParams();
    const size=300

     const first_slice = Product.find((item) => item.product === id).Data.find((item)=>item.name===aboutId)?.SubData.find((item) => item.size === size)?.DataSize
     //.DataSize
    // console.log(first_slice)
    const { Index, setIndex, setImage } = useContext(ItemImg); // Use context for state management

    const handlePrevIndex = () => {
        const totalItems = first_slice.images.length; // Total images
        setIndex((prevState) => {
            const newIndex = (prevState.currentIndex - 2 + totalItems) % totalItems;
            console.log("Updated index (prev):", newIndex); // Log new index
            return { currentIndex: newIndex };
        });
    };

    const handleNextIndex = () => {
        const totalItems = first_slice.images.length; // Total images
        setIndex((prevState) => {
            const newIndex = (prevState.currentIndex + 2) % totalItems;
            return { currentIndex: newIndex };
        });
    };

    const { currentIndex } = Index || { currentIndex: 0 }; // Default to 0 if Index is undefined
    const totalItems = first_slice.images.length 
    // console.log(totalItems)

    // Determine displayed images
    
     const flattenedImages = first_slice.images.map((imageObj) => Object.values(imageObj)[0]);
    // returns [ ] , w/o [0] it will return [ [] , [] ,[] ] nested array.....
   
    const displayedNames = [
        ...flattenedImages.slice(currentIndex, currentIndex + itemsPerPage),
        ...flattenedImages.slice(0, Math.max(0, (currentIndex + itemsPerPage) - totalItems)),
    ];

    return (
        <div className='DK'>
            <ul className="DKUL" style={{ listStyle: "none" }}>
                {displayedNames.map((name, index) => {
                    return (
                        <li className="DKLI" key={index}>

                            <img
                                className="DKIMG"
                                src={name}
                                onClick={() => {
                                    setImage(name);
                                }}
                                // Pass the image name
                                alt="unavailable"
                            />

                        </li>
                    )
                }

                )}
            </ul>
            <Image_button
                className="DKUL_button"
                OnClick={(identifier) => {
                    if (identifier === 'Prev') handlePrevIndex();
                    else handleNextIndex();
                }}
            />
        </div>
    );
}
