import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div className="footerContainer">
            <h4>Où me retrouver ?</h4>
            <ul>
               <li> <a rel="noreferrer" href="https://www.linkedin.com/in/marvinrodriguesnovo" target="_blank"><i className="fab fa-linkedin"/> LinkedIn </a></li>
               <li> <a rel="noreferrer" href="https://github.com/Marvinrn" target="_blank"> <i className="fab fa-github"/> Github </a></li>
               <li><i className="fas fa-envelope"></i> marvinnrn@gmail.com</li>
            </ul>
        </div>
    </footer>
    );
};

export default Footer;