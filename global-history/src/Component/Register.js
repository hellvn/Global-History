import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Register extends React.Component{
    render() {
        return(

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="login-box">
                                <form className="form-style-1 shadow p-30">
                                    <p>Don't have an account? Create your account, it takes less than a minute.</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                                    </div>
                                    <button type="submit" className="btn-style-1 w-100">Create an Account</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}