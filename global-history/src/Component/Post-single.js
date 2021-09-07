import React from "react";

export default class postSingle extends React.Component{
    render() {
        return (
            <div className="blog-single-page pt-70 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-box p-0">
                                <div className="blog_img mb-20"><img src="img/blog/blog-1.jpg" alt=""/></div>
                                <div className="blog-des">
                                    <h6 className="blog_date font-weight-normal text-muted">
                                        <span>business</span> January 01, 2020</h6>
                                    <h5 className="mt-10 mb-6"><a href="#" className="text-dark">The Most Advance
                                        Business Plan</a></h5>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet
                                        consectetur piscing elit consectetur adipiscing elit sed et eletum. orem ipsum
                                        dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet
                                        consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam
                                        tincidunt orci lacus id varius dolor fermum sit amet.</p>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet
                                        consectetur piscing elit consectetur adipiscing elit sed et eletum. orem ipsum
                                        dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet
                                        consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam
                                        tincidunt orci lacus id varius dolor fermum sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tags-share mt-30 pb-15 d-inline-block w-100">
                                <div className="tags d-flex float-lg-left pt-15"><span>Tags :</span>
                                    <ul>
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">business</a></li>
                                        <li><a href="#">corporate</a></li>
                                    </ul>
                                </div>
                                <div className="share d-flex float-lg-right pt-15"><span>Share :</span>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a href="#"><i
                                            className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li className="list-inline-item"><a href="#"><i
                                            className="fab fa-google-plus-g"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i
                                            className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="comments-area mt-50">
                                <div className="blog-single-title">
                                    <h4>Read Comments</h4>
                                </div>
                                <div className="comment-box mb-30">
                                    <div className="comment">
                                        <div className="author-thumb"><img src="img/blog/author-thumb/thumb-1.jpg"
                                                                           alt=""/></div>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">Kevin Marthin – Jan 01, 2020:</div>
                                            <div className="rating"><i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i></div>
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
                                            <div className="comment-info clearfix">Kevin Marthin – Jan 01, 2020:</div>
                                            <div className="rating"><i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i></div>
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
                                            <div className="comment-info clearfix">Kevin Marthin – Jan 01, 2020:</div>
                                            <div className="rating"><i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i></div>
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
                            </div>
                        </div>
                    </div>
                </div>
    )
    }
}