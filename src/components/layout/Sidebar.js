import React from "react";
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
            <NavLink to='/' activeClassName='activeNavLink' className='navLink' exact>Home</NavLink ><br />
            <NavLink to='/prompt' activeClassName='activeNavLink' className='navLink'>Prompt</NavLink ><br />
            <NavLink to='/props' className='navLink'>Props</NavLink ><br />
        </div>
    );
};

export default Sidebar;
