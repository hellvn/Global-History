import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Aside extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tags:[]
        }
    }
    componentDidMount(){
        axios.get("https://localhost:44361/api/Categories")
            .then(rs=>{
                this.setState({
                    tags:rs.data
                })
            })
    }
    render() {
        const tag = this.state.tags;
        return(
            <div className="col-lg-4">
                <aside>
                    <div className="widget mb-50">
                        <h3>Category</h3>
                        <ul className="blog-categorie">
                            {
                                tag.map((e,k)=>{
                                    return (
                                        <li key={k}>
                                            <Link to={"/category/"+ e.catName}>{e.catName}</Link>
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