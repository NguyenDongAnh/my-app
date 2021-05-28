import React from 'react'
import '../../assets/css/style.css';
import '../../assets/css/grid.css';
import { Link } from 'react-router-dom'
import uploadImg from '../../assets/img/portfolio/uploadimg.png'
export default function Project() {
    return (
        <section className='project' id='project'>
            <div className='content'>
                <div className="title"> <span>My Projects</span></div>
                <div className="row">
                    <div className="col-4 col-md-6 col-sm-12">
                        <Link to="/upload">
                            <div className='box f-height border-box'>
                                <div className='box-content'>
                                    <div className='image f-width'>
                                        <img src={uploadImg} alt='...' />
                                    </div>
                                    <div className='topic'>Upload Image with Preview and Progress Bar</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}