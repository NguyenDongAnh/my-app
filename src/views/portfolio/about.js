import React from 'react';
import '../../assets/css/style.css';
import about from '../../assets/img/portfolio/pexels-photo-1261427.jpeg'
import myCV from '../../assets/img/portfolio/Nguyen-Dong-Anh_CV.pdf'

export default function About() {
    return (
        <section className='about' id='about'>
            <div className='content'>
                <div className='title'>
                    <span>About Me</span>
                </div>
                <div className='about-details'>
                    <div className='left'>
                        <img src={about} alt="..." />
                    </div>
                    <div className="right">
                        <div className="topic">Programming Is My Passion</div>
                        <p>I'm Nguyen Dong Anh, a fourth year student at HaNoi University of Science.
                            I am very interested in programming and creating things with one's own hands, this website is a example. 
                             A responsive portfolio website created by pure HTML CSS combine with ReactJS
                            </p>
                        <a href={myCV} download>
                            <div className='button'>
                                <button>Download MyCV</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}