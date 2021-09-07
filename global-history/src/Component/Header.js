import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    render() {
        return(

            <header className="header">
                <div className="header-upper-bar">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-8 col-md-6 col-sm-4 col-2">
                                <nav className="navbar header-navigation navbar-expand-lg p-0">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTheme" aria-controls="navbarTheme" aria-expanded="false" aria-label="Toggle navigation"> </button>
                                    <div className="collapse navbar-collapse" id="navbarTheme">
                                        <ul className="navbar-nav align-items-start align-items-lg-center">
                                            <li><Link className="nav-link" to="/">Home</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8 col-10 text-right">
                                <div className="header-right-link">
                                    <ul>
                                        <li><a href="signin.html">Sign in</a></li>
                                        <li><a href="register.html">Register</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}