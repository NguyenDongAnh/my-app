import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/grid.css';

function Navbar() {
    return (
        <nav>
            <div className="row">
                <div className='main-nav'>
                    <div className="nav-logo">
                        <div className='text'>Portfolio.</div>
                    </div>
                    <ul className='nav-menu'>
                        <li className='nav-item active'>
                            <a className='nav-link' href="#home">
                                <i className='bx bxs-home'></i>
                                <span className='nav-name'>Home</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#about">
                                <i className='bx bxs-group'></i>
                                <span className='nav-name'>About Me</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#skill">
                                <i className='bx bxs-spreadsheet'></i>
                                <span className='nav-name'>Skills</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#project">
                                <i className='bx bx-category' ></i>
                                <span className='nav-name'>Projects</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#contact">
                                <i className='bx bx-paper-plane' ></i>
                                <span className='nav-name'>Contact</span>
                            </a>
                        </li>
                    </ul>
                    <div className='search-and-account'>
                        <a className='nav-link' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bumerang.super.9">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a className='nav-link' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bumerang.super.9">
                            <i className='bx bxl-twitter' ></i>
                        </a>
                        <a className='nav-link' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bumerang.super.9">
                            <i className='bx bxl-instagram' ></i>
                        </a>
                        <div className='mobile-toggle'>
                            <i className='bx bx-menu' ></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
