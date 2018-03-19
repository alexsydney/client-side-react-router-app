import React from "react";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {

    const links = [
        {name: 'Color', url: '/color'},
        {name: 'Prompt', url: '/prompt'},
        {name: 'Prop Viewer', url: '/props'},
        {name: '404 Error', url: '/404Error'},
    ];

    let linksComponents = links.map((link, index) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'}
                         to={link.url} exact>{link.name}</NavLink>
            </li>
        );
    });

    return (
        <div className={'leftNavContainer'}>
          <ul>
            <li><NavLink className={'navLink'} activeClassName={'activeNavLink'} to='/' exact>Home</NavLink></li>
            { linksComponents }
          </ul>


          {/* <NavLink to='/' activeClassName='activeNavLink' className='navLink'exact>Home</NavLink><br/> */}
          {/* <NavLink to='/prompt' activeClassName='activeNavLink' className='navLink'>Prompt</NavLink><br/> */}
          {/* <NavLink to='/props' activeClassName='activeNavLink' className='navLink'>Props</NavLink><br/> */}
          {/* <NavLink to='/foo' activeClassName='activeNavLink' className='navLink'>Not Found</NavLink><br/> */}


        </div>
    );
};

export default Sidebar;
