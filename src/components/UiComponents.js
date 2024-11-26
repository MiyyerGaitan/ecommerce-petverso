import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'
import { Loader, Menu as MenuIcon } from 'react-feather';

export const cPrimary = '#0055ff'; 
export const cPrimaryHover = '#0066ee'; 
export const cHeader = '#000';
export const cHeaderHover = '#333'; 
export const cSecondary = '#ff00cc';
export const cSecondaryHover = '#cc0099'; 

export const GlobalStyle = createGlobalStyle`
  
    ${normalize}

    body {
        font-size:1.2em;
        line-height:1.4em;

        @media (max-width: 500px) 
        { 
            font-size:1em;
        }
    }

    * {
        font-family: Arial, sans-serif;
    }

    a {
        color: ${cSecondary};
        text-decoration: none;
        cursor:pointer;
    
        &:hover {
            color: ${cSecondaryHover};
        }
    }

    label {
        @media (max-width: 760px) {
            display: block !important;
            max-width: initial !important;
        }
    }
`

const HeaderSrc = ({ className, children }) => (
    <div className={className}><div>{children}</div></div>
);

export const Header = styled(HeaderSrc)`
    background-color: ${cHeader};    
    div:first-child {
        margin:0px auto;
        padding:0em 1em;
        max-width:1024px;
        
        display:flex;
        flex-wrap: wrap;
        justify-content:space-between;    
        align-items: center;
        h1 {
            color:#fff;
        }
    }  
    
    a {
        color: #fff;
        padding:0.6em;
        margin-left:1em;
        border-radius:3px;
    }

    a:hover {
        color:#fff;
        background-color: ${cHeaderHover};
    }

    a.active {
    background-color: #fff;
    color:${cHeader};
    }

`;

export const Page = styled.div`
        background-color: #fff;
        margin:0px auto;
        align-items: center;
        justify-content: center;
        h1 {
            color:#000;
        }
`;

export const Card = styled.div`

    border-radius:5px;
    border:1px solid #ddd;
    box-shadow:0px 0px 4px #eee;
    padding:2em;
    margin-bottom:1em;

    @media (max-width: 500px) 
    { 
        padding:1em;
    }

`;

const HamburgerSrc = ({ className, onClick }) => (
    <a onClick={onClick} className={className}><MenuIcon /></a>
);

export const Hamburger = styled(HamburgerSrc)`

    display:none;

    svg 
    {
        width: 1em;
        height: 1em;
        vertical-align:-0.25em;
    }

    @media (max-width: 1024px) 
    {    
        display:inline;
    }

`;

export const Menu = styled.ul`
    display:flex;
    padding:0px;
    list-style: none;     
    
    @media (max-width: 1024px) 
    {   
        display:block;
        width:100%;
        background-color:#444;
        margin:0px -1em;
        padding:0em 1em;

        a {
            display:block;
            line-height:3.5em;
            margin:0px -1em;
            padding:0px 1em;
            border-radius:0;
            width:100%;
        }

        a.active {
            background-color:#555;
            color:#fff;
        }

        &.menuHidden 
        {
            display:none;
        }
    }
`;
