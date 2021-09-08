import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tags:[]
        }
    }
    componentDidMount(){
        axios.get("https://localhost:44361/api/Categories")
            .then(rs=>{
                this.setState({
                    tags:rs.data
                })
            })
    }
    render() {
        const tag = this.state.tags;
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
                                            <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle"
                                                                                 to="#" id="dropdown02"
                                                                                 data-toggle="dropdown"
                                                                                 aria-haspopup="true"
                                                                                 aria-expanded="false">Categories</Link>
                                                <div className="dropdown-menu" aria-labelledby="dropdown02">
                                                    {
                                                        tag.map((e,k)=>{
                                                            return (
                                                                <li key={k}>
                                                                    <Link to={"/category/"+ e.catName}>{e.catName}</Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8 col-10 text-right">
                                <div className="header-right-link">
                                    <ul>
                                        <li><Link to="/login">Sign in</Link></li>
                                        <li><Link to="/register">Register</Link></li>
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