import React from "react";
import axios from "axios";
import {baseURL} from "../baseURL";
import {Link} from "react-router-dom";

export default class Aside extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category:[],
            posts:[]
        }
    }
    componentDidMount(){
        axios.get(baseURL.category.url)
            .then(rs=>{
                this.setState({
                    category:rs.data
                })
            })
        axios.get(baseURL.posts.url).then(rs=>{
            this.setState({
                posts:rs.data
            })
        })
    }
    render() {
        const tags = this.state.category;
        return(
            <div className="col-lg-4">
                <aside>
                    <div className="widget mb-50">
                        <h3>Category</h3>
                        <ul className="blog-categorie">
                            {
                                tags.map((tag,k)=>{
                                    return (
                                        <li key={k}>
                                            <Link to={"/category/"+ tag.catId}>{tag.catName}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </aside>
            </div>
        )
    }

}