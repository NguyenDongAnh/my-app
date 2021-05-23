import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/grid.css'
export default function Contact() {
    return (
        <section className='contact' id='contact'>
            <div className='content'>
                <div className='title'>
                    <span>Contact</span>
                </div>
                <div className="row">
                    <div className="col-4 col-md-6 col-sm-12">
                        <div className='box'>
                            <div className='topic'>
                                <span>Address</span>
                            </div>
                            <p>
                                <i className='bx bx-map'></i>
                                <span>DaiMo Ward, NamTuLiem District, HaNoi</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 col-sm-12">
                        <div className='box'>
                            <div className='topic'>
                                <span>Phone</span>
                            </div>
                            <p>
                                <i className='bx bxs-phone'></i>
                                <span>(+84) 964625189</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 col-sm-12">
                        <div className='box'>
                            <div className='topic'>
                                <span>Email</span>
                            </div>
                            <p>
                                <i className='bx bx-envelope'></i>
                                <span>nguyendonganh_t62@hus.edu.vn</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}