import React from "react";
import axios from "axios";

export default class Aside extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tags:[]
        }
    }
    componentDidMount(){
        axios.get("https://localhost:44347/api/Tags")
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
                        <h3>Categories</h3>
                        <ul className="blog-categorie">
                            {
                                tag.map((e,k)=>{
                                    return(
                                        <li key={k}><a href="#">{e.name}</a></li>
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