import React from "react";

export default class Post extends React.Component{
    render() {
        return <div>
            <div className="blog-page pt-70 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="blog-box shadow">
                                        <div className="blog_img mb-20"><img src="img/blog/blog-1.jpg" alt=""/></div>
                                        <div className="blog-des">
                                            <h6 className="blog_date font-weight-normal text-muted"><span>business</span> January 01, 2020</h6>
                                            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">The Most Advance Business Plan</a></h5>
                                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
                                            <div className="read_more">
                                                <div className="blog_border"></div>
                                                <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="blog-box shadow">
                                        <div className="blog_img mb-20"><img src="img/blog/blog-2.jpg" alt=""/></div>
                                        <div className="blog-des">
                                            <h6 className="blog_date font-weight-normal text-muted"><span>business</span> January 01, 2020</h6>
                                            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">Beautiful Home Page</a></h5>
                                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
                                            <div className="read_more">
                                                <div className="blog_border"></div>
                                                <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="blog-box shadow">
                                        <div className="blog_img mb-20"><img src="img/blog/blog-3.jpg" alt=""/></div>
                                        <div className="blog-des">
                                            <h6 className="blog_date font-weight-normal text-muted"><span>business</span> January 01, 2020</h6>
                                            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">Modern Design Concept</a></h5>
                                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
                                            <div className="read_more">
                                                <div className="blog_border"></div>
                                                <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="blog-box shadow">
                                        <div className="blog_img mb-20"><img src="img/blog/blog-4.jpg" alt=""/></div>
                                        <div className="blog-des">
                                            <h6 className="blog_date font-weight-normal text-muted"><span>business</span> January 01, 2020</h6>
                                            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">Smart Flexible Visiting Card</a></h5>
                                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
                                            <div className="read_more">
                                                <div className="blog_border"></div>
                                                <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="blog-box shadow">
                                        <div className="blog_img mb-20"><img src="img/blog/blog-5.jpg" alt=""/></div>
                                        <div className="blog-des">
                                            <h6 className="blog_date font-weight-normal text-muted"><span>business</span> January 01, 2020</h6>
                                            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">Investment Planning</a></h5>
                                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
                                            <div className="read_more">
                                                <div className="blog_border"></div>
                                                <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="blog-box shadow">
                                        <div className="blog_img mb-20"><img src="img/blog/blog-6.jpg" alt=""/></div>
                                        <div className="blog-des">
                                            <h6 className="blog_date font-weight-normal text-muted"><span>business</span> January 01, 2020</h6>
                                            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">Why you Should Always First</a></h5>
                                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
                                            <div className="read_more">
                                                <div className="blog_border"></div>
                                                <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            
                            <aside>
                                
                                <form className="search-form mb-50">
                                    <input type="text" className="form-control" placeholder="Search" value=""/>
                                        <button className="search-submit"><i className="fas fa-search"/></button>
                                </form>
                                <div className="widget mb-50">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul className="blog-categorie">
                                        <li><a href="#"><i className="far fa-dot-circle"></i> Business</a></li>
                                        <li><a href="#"><i className="far fa-dot-circle"></i> Traveling</a></li>
                                        <li><a href="#"><i className="far fa-dot-circle"></i> Developement</a></li>
                                        <li><a href="#"><i className="far fa-dot-circle"></i> Motion Designer</a></li>
                                        <li><a href="#"><i className="far fa-dot-circle"></i> Content Writing</a></li>
                                        <li><a href="#"><i className="far fa-dot-circle"></i> Web Developement</a></li>
                                        <li><a href="#"><i className="far fa-dot-circle"></i> Business Strategy</a></li>
                                        <li><a href="#"><i className="far fa-dot-circle"></i> Risk Management</a></li>
                                    </ul>
                                </div>
                                <div className="widget mb-50">
                                    <h3 className="widget-title">Recent Post</h3>
                                    <div className="blog-recent-post">
                                        <div className="recent-single-post mb-20">
                                            <div className="post-img"> <a href="#"><img src="img/blog/recent-post/recent-post-1.jpg" alt=""/></a> </div>
                                            <div className="pst-content">
                                                <p><a href="#">Lorem ipsum rem ipsumsd dolorit amet consectetur ipiscing.</a></p>
                                                <span className="date-type">01 Jan / 2020</span> </div>
                                        </div>
                                        <div className="recent-single-post mb-20">
                                            <div className="post-img"> <a href="#"><img src="img/blog/recent-post/recent-post-2.jpg" alt=""/></a> </div>
                                            <div className="pst-content">
                                                <p><a href="#">Lorem ipsum rem ipsumsd dolorit amet consectetur ipiscing.</a></p>
                                                <span className="date-type">01 Jan / 2020</span> </div>
                                        </div>
                                        <div className="recent-single-post">
                                            <div className="post-img"> <a href="#"><img src="img/blog/recent-post/recent-post-3.jpg" alt=""/></a> </div>
                                            <div className="pst-content">
                                                <p><a href="#">Lorem ipsum rem ipsumsd dolorit amet consectetur ipiscing.</a></p>
                                                <span className="date-type">01 Jan / 2020</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget mb-30">
                                    <h3 className="widget-title">Tags</h3>
                                    <div className="blog-tags"> <a href="#">Business</a> <a href="#">Traveling</a> <a href="#">Developement</a> <a href="#">Motion</a> <a href="#">Writing</a> <a href="#">Strategy</a> <a href="#">Management</a> </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}