import React from 'react'
import { Images } from './components/Mid/images'
import { Content } from './components/Mid/Content'
import { Item_Box } from './components/Mid/Item_box'
import Nav from './components/Navbar/Nav'
export function Home() {

    return (

        <>
            <Nav />
            <Item_Box />
            <Images />
            <Content />
        </>
    )
}
