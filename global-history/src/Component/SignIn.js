import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }
    signIn(){
        axios.get('https://localhost:44361/api/Users')
            .then(rs=>{
                const data = rs.data;
                this.setState({
                    email:data.email,
                    password:data.password
                })
            })
        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        })
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="login-box">
                            <form className="form-style-1 shadow p-30">
                                <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
                                <div className="form-group">
                                    <input type="email" id="inputEmail" onChange={this.handleEmailChange} className="form-control" placeholder="Email" required autoFocus/>
                                </div>
                                <div className="form-group">
                                    <input type="password" id="inputPassword" onChange={this.handlePasswordChange}  className="form-control" placeholder="Password" required autoFocus/>
                                </div>
                                <div className="row">
                                    <div className="col-lg col-md col-sm">
                                        <div className="forgot-password text-right"> <a href="#" className="text-danger">I forgot my password!</a> </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="button" onClick={this.signIn} className="btn-style-1 w-100">Sign In</button>
                                </div>
                                <p className="mb-0">Don't have account? <Link to="/register">Signup!</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}
}