import React from "react";
import Aside from "../layout/aside";
import axios from "axios";
import {withRouter} from "react-router-dom";

class PostSingle extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            post:[]
        }
    }
    componentDidMount() {
        const id =this.props.match.params.postId;
        axios.get("https://localhost:44361/api/Posts/" + id)
            .then(rs=>{
                const data = rs.data;
                this.setState({
                    post:data
                })
            })
    }
    render() {
        const post = this.state.post;
        return(
            <div className="blog-single-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-box">
                                <div className="blog_img mb-20"><img src={post.postImage} alt=""/></div>
                                <div className="blog-des">
                                    <h5 className="mt-10 mb-6">{post.postTitle}</h5>
                                    <p>{post.description}</p>
                                </div>
                            </div>
                           {/* <div className="comments-area mt-50">
                                <div className="blog-single-title">
                                    <h4>Read Comments</h4>
                                </div>
                                <div className="comment-box mb-30">
                                    <div className="comment">
                                        <div className="author-thumb"><img src="img/blog/author-thumb/thumb-1.jpg"
                                                                           alt=""/></div>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">Kevin Marthin</div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur ipiscing elit
                                                amet consectetur piscing elitsada consectetur adipiscing elit sed et
                                                eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet
                                                consectetur piscing elit amet consectetur.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-box ml-30 mb-30">
                                    <div className="comment">
                                        <div className="author-thumb"><img src="img/blog/author-thumb/thumb-2.jpg"
                                                                           alt=""/></div>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">Kevin Marthin</div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur ipiscing elit
                                                amet consectetur piscing elitsada consectetur adipiscing elit sed et
                                                eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet
                                                consectetur piscing elit amet consectetur.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-box">
                                    <div className="comment">
                                        <div className="author-thumb"><img src="img/blog/author-thumb/thumb-3.jpg"
                                                                           alt=""/></div>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">Kevin Marthin,</div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur ipiscing elit
                                                amet consectetur piscing elitsada consectetur adipiscing elit sed et
                                                eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet
                                                consectetur piscing elit amet consectetur.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-comments mt-50 mb-30">
                                <div className="blog-single-title">
                                    <h4>Post Comments</h4>
                                </div>
                                <div className="post-comment-form">
                                    <form className="form-style-2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Your Full Name"
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Your Email Address"
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Your Comment"
                                                      rows="5"></textarea>
                                        </div>
                                        <button type="submit" className="btn-style-1 text-uppercase">Post Comment
                                        </button>
                                    </form>
                                </div>
                            </div>*/}
                        </div>
                        <Aside/>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(PostSingle);