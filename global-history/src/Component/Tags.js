import React from "react";
import axios from "axios";

export default class Tags extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            PostTag:[],
            Post:[],
            Tag:[]
        }
    }
    componentDidMount() {
        const catName = this.props.match.params.catName;
        axios.get('https://localhost:44361/api/Categories/'+ catName)
            .then(rs=>{
                const data = rs.data.data;
                this.setState({
                    PostTag:data.PostTag,
                    Post:data
                })
            })
    }
    render() {
        const tag =this.state.PostTag;
        const post = this.state.Post;
        return(
            <div className="col-lg-8">
                <h2>{tag.name}</h2>
                <div className="row">
                    {
                        post.map((e,k)=>{
                            return(
                                <div className="col-lg-6 col-md-6 mb-30" key={k}>
                                    <div className="blog-box shadow">
                                        <div className="blog_img mb-20"><img src={e.img}/></div>
                                        <div className="blog-des">
                                            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">{e.title}</a></h5>
                                            <p className="text-muted"></p>
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