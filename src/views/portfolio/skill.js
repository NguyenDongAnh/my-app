import React from 'react'
import '../../assets/css/style.css';
import '../../assets/css/grid.css';

export default function Skill() {
    return (
        <section className='skills' id='skill'>
            <div className='content'>
                <div className="title"> <span>My Skills</span></div>
                <div className="row">
                    <div className="col-4 col-md-6 col-sm-12">
                        <div className='box f-height border-box'>
                            <div className='box-content'>
                                <div className='icon'>
                                    <i className='bx bx-code-alt'></i>
                                </div>
                                <div className='topic'>HTML</div>
                                <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-4 col-md-6 col-sm-12">
                        <div className='box f-height border-box'>
                            <div className='box-content'>

                                <div className='icon'>
                                    <i className='bx bxl-css3' ></i>
                                </div>
                                <div className='topic'>CSS</div>
                                <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-4 col-md-6 col-sm-12">
                        <div className='box f-height border-box'>
                            <div className='box-content'>

                                <div className='icon'>
                                    <i className='bx bxl-javascript' ></i>
                                </div>
                                <div className='topic'>Javascript</div>
                                <p>JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-4 col-md-6 col-sm-12">
                        <div className='box f-height border-box'>
                            <div className='box-content'>

                                <div className='icon'>
                                    <i className='bx bxs-coffee' ></i>
                                </div>
                                <div className='topic'>Java</div>
                                <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-4 col-md-6 col-sm-12">
                        <div className='box f-height border-box'>
                            <div className='box-content'>

                                <div className='icon'>
                                    <i className='bx bxl-python' ></i>
                                </div>
                                <div className='topic'>Python</div>
                                <p>Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-4 col-md-6 col-sm-12">
                        <div className='box f-height border-box'>
                            <div className='box-content'>

                                <div className='icon'>
                                    <i className='bx bxl-react'></i>
                                </div>
                                <div className='topic'>ReactJS</div>
                                <p>ReactJS is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-4 col-md-6 col-sm-12">
                        <div className='box f-height border-box'>
                            <div className='box-content'>

                                <div className='icon'>
                                    <i className='bx bxl-codepen' ></i>
                                </div>
                                <div className='topic'>Webpack</div>
                                <p>webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-4 col-md-6 col-sm-12">
                        <div className='box f-height border-box'>
                            <div className='box-content'>

                                <div className='icon'>
                                    <i className='bx bx-git-branch' ></i>
                                </div>
                                <div className='topic'>Git</div>
                                <p>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}