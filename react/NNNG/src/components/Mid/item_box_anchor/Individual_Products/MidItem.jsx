import { useContext } from 'react'
import { ItemImg } from '../../../../ContextHooks'
import './MidItem.css'
export function MidItem() {

    const { Name } = useContext(ItemImg)

    return (
        <>
            <div className='MI' >
                <img style={{color:"black",height:"100%",width:"100%"}} src={Name} alt="Not available" />
            </div>
        </>
    )

}