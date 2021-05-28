import React, { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import Navbar from '../component/navbar/navbar';
import Home from '../views/portfolio/home';
import About from '../views/portfolio/about';
import Skill from '../views/portfolio/skill';
import Contact from '../views/portfolio/contact'
import Project from '../views/portfolio/project'
export default function Portfolio() {
    // let location = useLocation();

    useEffect(() => {
        document.title = "Portfolio";
        let body = document.querySelector('body');
        let overlay = document.querySelector('.overlay');
        let nav_menu = document.querySelector('.nav-menu');
        let nav_item = document.querySelectorAll('.nav-item');
        let mobile_toggle = document.querySelector('.mobile-toggle');

        let handleResize = setInterval(() => {
            if (window.innerWidth >= 1000) {
                if (nav_menu.classList.contains('active')) {
                    nav_menu.classList.remove('active');
                    body.classList.remove('noscroll');
                    overlay.classList.remove('active');
                }
            }
        }, 300);

        nav_item.forEach((element) => {
            element.onclick = () => {
                if (nav_menu.classList.contains('active')) {
                    nav_menu.classList.remove('active');
                    body.classList.remove('noscroll');
                    overlay.classList.remove('active');
                }
            }
        })


        // SCROLL EVENT

        let handleScroll = (element) => {
            var current = nav_menu.querySelectorAll(".active");
            current[0].classList.remove('active');
            element.classList.add('active');
        }

        let home = document.getElementById('home');
        let about = document.getElementById('about');
        let skills = document.getElementById('skill');
        let project = document.getElementById('project');
        let contact = document.getElementById('contact');

        window.onscroll = () => {
            if (window.pageYOffset + 600 >= contact.offsetTop) {
                handleScroll(nav_item[4]);
            } else if (window.pageYOffset <= home.offsetTop + home.clientHeight - 65) {
                handleScroll(nav_item[0]);
            } else if (window.pageYOffset <= about.offsetTop + about.clientHeight - 65) {
                handleScroll(nav_item[1]);
            } else if (window.pageYOffset <= skills.offsetTop + skills.clientHeight - 65) {
                handleScroll(nav_item[2]);
            } else if (window.pageYOffset <= project.offsetTop + project.clientHeight - 65) {
                handleScroll(nav_item[3]);
            }
        }

        //TOGGLE

        mobile_toggle.onclick = () => {
            nav_menu.classList.toggle('active');
            body.classList.toggle('noscroll');
            overlay.classList.toggle('active');
        }

        overlay.onclick = () => {
            nav_menu.classList.toggle('active');
            body.classList.toggle('noscroll');
            overlay.classList.toggle('active');
        }
        // SCROLL TO TOP
        let scroll_top = document.querySelector('.scroll-top')
        scroll_top.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        return (() => {
            clearInterval(handleResize)
        })
    }, [])

    return (
        <div>
            <div className="scroll-top">
                <i className='bx bxs-up-arrow-alt'></i>
            </div>
            <Navbar />
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
            <div className="overlay"></div>
        </div>
    );
}