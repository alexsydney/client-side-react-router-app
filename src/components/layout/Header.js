import React from 'react';
import {Image} from "react-bootstrap";

const Header = () => {

    return (
        <header className='header'>
            <a href='/'>
                <Image src="/assets/react_router2.png" className='header-logo' />
            </a>

            <div className='header-text'>
                React Router 4
            </div>

        </header>
    );
};

export default Header;
