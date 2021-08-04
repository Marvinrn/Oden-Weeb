import React from 'react';
import OdenLogo from '../assets/OdenLogo1.png'
import { NavLink } from 'react-router-dom';

const TopBar = () => {
    return (
        <header>
            <nav className="topBar">
                <a href="/" ><img className="OdenLogo" src={OdenLogo} alt='logo'/></a>
                <NavLink exact to="/" activeClassName="nav-active"> Accueil </NavLink>
                <NavLink exact to="/MyTops" activeClassName="nav-active"> Mes Tops </NavLink>
                <NavLink exact to="/Recommandation" activeClassName="nav-active">Mes Recommendations </NavLink>
                <a href="/#" ><i className="fas fa-bars"></i></a>
            </nav>
        </header>
    );
};

export default TopBar;