import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import {baseURL} from "../baseURL";
import Aside from "../layout/aside";

 class Tags extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             Post:[],
             category:[],
             postCat:[]
         }
     }
     componentDidMount(){
         // const catName = this.props.match.params.catName;
         axios.get(baseURL.posts.url)
             .then(rs=>{
                 this.setState({
                     Post:rs.data
                 })
             })
         axios.get(baseURL.postCat.url).then(rs=>{
             this.setState({
                 postCat:rs.data
             })
         })
     }
     Compare(){
         // const posts = this.state.Post;
         const postCat = this.state.postCat;
         const catName = this.props.match.params.catName
         if (catName === postCat.catName){
            this.state.Post.postId = postCat.postId;
             return this.state.Post;
         }
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
export default withRouter(Tags);