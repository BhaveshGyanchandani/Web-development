import './Footer.css'
import { Footer_Items } from './Footer.js'
import { Link, useParams } from 'react-router-dom'

export function Footer() {
    
    return (

        <div className="Footer">
            <div className='About'>
                {
                    Footer_Items.map((items, index) => {

                        return (
                            <ul key={index}>
                                <span className='About-ul-span' > {items.Title}</span>
                                {
                                    items.Data.map((data, index) => {

                                        return (
                                            <Link key={index} to={`/Home/${data}`} >
                                                <li >
                                                    <span className='About-li-span'> {data} </span>
                                                </li>
                                            </Link>
                                        )
                                    })
                                }

                            </ul>

                        )
                    })
                }
            </div>
        </div>

    )
}