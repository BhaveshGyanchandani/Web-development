import React from 'react'
import { Images } from './components/Mid/Front/images'
import { Content } from './components/Mid/Front/Content'
import { Product_Box } from './components/Mid/Front/Product_box'
import Nav from './components/Navbar/Nav'
import { Footer } from './components/Footer/Footer.jsx'

export function Home() {
    return (

        <>
            <Nav />
            <Product_Box />
            <Images />
            <Content />
            <Footer />
        </>
    )
}
