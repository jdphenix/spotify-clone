/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import '../styles/landing.scss';
import Navbar from './navbar';
import Body from './body';
import Footer from './footer';

const Landing = () => {
    const [sidebar, setSidebar] = useState(false);
    return(
        <div className={sidebar ? 'scroll' : ''}>
            <Navbar setSidebar={setSidebar} sidebar={sidebar} />
            <Body />
            <Footer />
        </div>
    )
}

export default Landing;