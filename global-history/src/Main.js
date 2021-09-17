import React from "react";
import {Switch,Route} from "react-router-dom";
import Post from "./Component/Post";
import Aside from "./layout/aside";
import Tags from "./Component/Tags";
import Register from "./Component/Register";
import SignIn from "./Component/SignIn";
import PostSingle from "./Component/PostSingle";
import ManageCategory from "./Component/ManageCategory";
import AddCategory from "./Component/AddCategory";
import EditCategory from "./Component/EditCategory";

export default class Main extends React.Component{
    render() {
        return(

            <div className="blog-page pt-70 pb-40">
                <div className="container">
                    <div className="row">
                        <Switch>
                        <Route path="/" exact>
                                <Post/>
                                <Aside/>
                        </Route>
                        <Route path="/Category/:id" exact>
                                <Tags/>
                                <Aside/>
                        </Route>
                        <Route path="/register" exact>
                            <Register/>
                        </Route>
                        <Route path="/login" exact>
                            <SignIn/>
                        </Route>
                        <Route path="/post-single/:postId" exact>
                            <PostSingle/>
                        </Route>
                        <Route path="/manage_category" exact>
                            <ManageCategory/>
                        </Route>
                        <Route path="/add-category" exact>
                            <AddCategory/>
                        </Route>
                        <Route path="/edit-category/:catName" exact>
                            <EditCategory/>
                        </Route>
                        </Switch>
                    </div>
                </div>
            </div>

        )
    }
}