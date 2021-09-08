import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class SignIn extends React.Component{
render() {
        return(
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="login-box">
                            <form class="form-style-1 shadow p-30">
                                <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password"/>
                                </div>
                                <div class="row">
                                    <div class="col-lg col-md col-sm">
                                        <div class="forgot-password text-right"> <a href="#" class="text-danger">I forgot my password!</a> </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn-style-1 w-100">Sign In</button>
                                </div>
                                <p class="mb-0">Don't have account? <Link to="/register">Signup!</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}
}