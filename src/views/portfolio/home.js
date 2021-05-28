import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/grid.css';

export default function Home() {
    return (
        <section className='home' id='home'>
            <div className='home-content'>
                <div className='text'>
                    <div className='text-one'>Hello,</div>
                    <div className='text-two'>I'm Nguyen Dong Anh</div>
                    <div className='text-three'>Web Developer</div>
                    <div className='text-four'>From VietNam</div>
                    <a href="mailto:nguyendonganh_t62@hus.edu.vn">
                        <div className='button'>
                            <button>Hire Me</button>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}