import React, { useState } from 'react'
import {BrowserRouter, NavLink} from "react-router-dom";
import {GlobalStyle, Menu, Header, Page, Hamburger} from './UiComponents'
import { Feather, ShoppingCart } from 'react-feather';
import Products from './Products';
import Footer from './Footer';

function App() {

    const [menu, setMenu] = useState(false);

    return <><GlobalStyle />
    
    <BrowserRouter>
        <Header>
            <h1><Feather style={{vericalAlign:"-0.1em"}} /> PetVerso</h1>
            <Hamburger onClick={() => setMenu(!menu)} />
            <Menu className={menu ? "" : "menuHidden"}>
                <li><NavLink onClick={() => setMenu(false)} exact to="/">Home</NavLink></li>
           </Menu>
        </Header>
    </BrowserRouter>
    <Page>
        <Products />
    </Page>
    <Footer />
    </>;
}

export default App;
