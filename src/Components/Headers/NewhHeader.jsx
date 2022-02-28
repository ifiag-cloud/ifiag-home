import React, { useState} from 'react';
import Logo from '../../Assets/images/ifiag_logo.png'

import { NavLink } from "react-router-dom";
import './Header.css';


const NewHeader = () => {
    const [click, setClick] = useState(false);

    const handleClickIcon = () => {
        setClick(!click);
    };

    return (
        <header>
            <div className="nav_container">
                <div className="logo">
                    <NavLink exact to="/" >
                        <img src={Logo} alt="" />
                    </NavLink>
                </div>

                <div className="nav_icon" onClick={handleClickIcon}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
                </div>

                <ul className={click ? "nav_menu active" : "nav_menu"}>

                        <>
                            <li className="nav_item">
                                <NavLink exact to="/" activeClassName="active" className="nav_links" onClick={handleClickIcon}>ACCUEIL </NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/institut" activeClassName="active" className="nav_links" onClick={handleClickIcon}>L'INSTITUT</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/actualites" activeClassName="active" className="nav_links" onClick={handleClickIcon}>ACTUALITES</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/nos-formation" activeClassName="active" className="nav_links" onClick={handleClickIcon}>nos-formation</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/digimobile" activeClassName="active" className="nav_links" onClick={handleClickIcon}>DIGI'MOBILE</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/ifiagTV" activeClassName="active" className="nav_links" onClick={handleClickIcon}>IFIAG TV</NavLink>
                            </li>
                    
                        </>
                    
                </ul>
            </div>
        </header>
    )
}

export default NewHeader;
