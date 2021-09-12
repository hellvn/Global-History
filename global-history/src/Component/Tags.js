import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";

 class Tags extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category:{},
            post:[],

        }
    }
    componentDidMount() {
        const catName = this.props.match.params.catName;
        axios.get('https://localhost:44361/api/Categories/'+ catName)
            .then(rs=>{
                const data = rs.data;
                this.setState({
                    category:data.catName
                })
            })

        axios.get('https://localhost:44361/api/Posts')
            .then(rs=>{
                const data = rs.catName;
                this.setState({
                    post:data
                })
            })

    }
    render() {
        const tag =this.state.category;
        const post = this.state.post;
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
                                            <div className="read_more">
                                                <Link to={"/post-single/" + e.postId} className="text-dark text-uppercase"> Read More</Link> </div>
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
export default withRouter(Tags);