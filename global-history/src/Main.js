import React from "react";
import {Link} from "react-router-dom";
import {Switch,Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Post from "./Component/Post";
import Aside from "./layout/aside";
import Tags from "./Component/Tags";
import Header from "./Component/Header";
import Register from "./Component/Register";
import SignIn from "./Component/SignIn";
import PostSingle from "./Component/PostSingle";

export default class Main extends React.Component{
    render() {
        return(
            <Switch>
            <div className="blog-page pt-70 pb-40">
                <div className="container">
                    <div className="row">
                        <Route path="/" exact>
                            <Post/>
                            <Aside/>
                        </Route>
                        <Route path="/Category/:catName" exact>
                            <Tags/>
                        </Route>
                        <Route path="/register" exact>
                            <Register/>
                        </Route>
                        <Route path="/login" exact>
                            <SignIn/>
                        </Route>
                        <Route path="/post-single" exact>
                            <PostSingle/>
                        </Route>
                    </div>
                </div>
            </div>
            </Switch>
        )
    }
}