import { useParams } from 'react-router-dom'
import './components/Mid/item_box_anchor/Item_template.css'
import { Product } from './components/Datasets/Products/TestProduct'
export function Test() {

    const id = "Dinner_set"
    const aboutId = "32pcs Dinner Set"
    const size = 300

    const first_slice = Product.find((item) => item.product === id).Data
    // .find((item) => item.name === aboutId)
    // .SubData.find((item) => item.size === size).DataSize

    // const first_slice = Product.find((item) => item.product === id).Data.SubData.find((item) => item.size === size).DataSize
    // console.log(first_slice)
    function handleTest() {
        console.log(first_slice)

    }

    return (
        <>
            <div onClick={handleTest} style={{ height: 'auto', width: 'auto', border: '3px solid black' }}  >

                {first_slice ? (
                    <ul>

                        <li key={first_slice.id}>

                            <img className="initial_box_img" src={first_slice.src || "/default-image.jpg"} alt={first_slice.name || "Image not available"} />
                            <div className="description">
                                <p>{first_slice.name}</p>
                                <p>
                                    <del style={{ color: "red", marginRight: "8px" }}>
                                        ${first_slice.InitialPrice}
                                    </del>
                                    <strong style={{ color: "green" }}>${first_slice.FinalPrice}</strong>
                                </p>
                                <p style={{color:"black"}}>{first_slice.Discount}% off</p>
                            </div>

                            <button className="add-to-cart"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onAddItem(first_slice)
                                }
                                }>
                                Add to Cart
                            </button>
                        </li>

                    </ul>
                ) : (
                    <p style={{ color: "red", textAlign: "center" }}>
                        No products found for this category.
                    </p>
                )}

            </div>
        </>
    )
}