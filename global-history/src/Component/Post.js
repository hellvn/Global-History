import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Post:[]
        }
    }
    componentDidMount(){
        axios.get("https://localhost:44347/api/Posts")
            .then(rs=>{
                this.setState({
                    Post:rs.data
                })

            })
    }
    render() {
        const posts = this.state.Post;
        return (
            <div className="col-lg-8">
                            <div className="row">
                                {
                                    posts.map((e,k)=>{
                                        return(
                                            <div className="col-lg-6 col-md-6 mb-30">
                                                <div className="blog-box shadow">
                                                    <div className="blog_img mb-20"><img src={e.img} /></div>
                                                    <div className="blog-des">
                                                        <h5 className="mt-10 mb-6"><a href="#" className="text-dark">{e.title}</a></h5>
                                                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
                                                        <div className="read_more">
                                                            <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
        )

    }
}