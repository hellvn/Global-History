import React from "react";
import {Link} from "react-router-dom";
import {Switch,Route} from "react-router-dom";
import Post from "./Component/Post";
import Aside from "./layout/aside";

export default class Main extends React.Component{
    render() {
        return(
            <div className="blog-page pt-70 pb-40">
                <div className="container">
                    <div className="row">
                        <Post/>
                        <Aside/>
                    </div>
                </div>
            </div>
        )
    }
}