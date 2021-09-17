import React from "react";

export default class Footer extends React.Component{
    render() {
        return(
        <footer className="pt-50">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 mb-30">
                            <div className="title mb-10">
                                <h3>About Us</h3>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet
                                    consectetur adipiscing elit sed et eletum.</p>
                                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit
                                    amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 mb-30">
                            <div className="title mb-10">
                                <h3>Navigation</h3>
                            </div>
                            <ul className="footer-link">
                                <li><a href="#">Home</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright text-center mt-20">© <span className="current-year"></span> All Rights Reserved.
            </div>
        </footer>
        )
    }
}