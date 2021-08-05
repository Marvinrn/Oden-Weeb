import React from 'react';
import OdenLogo from '../assets/Logo/OdenLogo1.png'
import { NavLink } from 'react-router-dom';

const TopBar = () => {
    return (
        <header>
            <nav className="topBar">
                <a href="/" ><img className="OdenLogo" src={OdenLogo} alt='logo'/></a>
                <NavLink exact to="/" activeClassName="nav-active"> Accueil </NavLink>
                <NavLink exact to="/MyTops" activeClassName="nav-active"> Mes Tops </NavLink>
                <NavLink exact to="/Recommandation" activeClassName="nav-active">Mes Recommendations </NavLink>
                <span className="threeBars"><i className="fas fa-bars"></i></span>
            </nav>
        </header>
    );
};

export default TopBar;