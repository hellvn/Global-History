import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {baseURL} from "../baseURL";

export default class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Post:[]
        }
    }
    componentDidMount(){
        axios.get(baseURL.posts.url)
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
                    <div className="row col-md-12">
                        {
                            posts.map((e,k)=>{
                                return(
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="blog-box shadow">
                                            <div className="blog_img mb-20"><img src={e.postImage}/></div>
                                            <div className="blog-des">
                                                <h5 className="mt-10 mb-6"><Link to={"/post-single/" + e.postId} className="text-dark">{e.postTitle}</Link></h5>
                                                <div className="read_more">
                                                    <Link to={"/post-single/" + e.postId} className="text-dark text-uppercase"> Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }
}