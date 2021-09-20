import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {baseURL} from "../baseURL";

export default class ManageCategory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tags:[]
        }
        this.refresh = this.refresh.bind(this);
    }
    componentDidMount(){
        axios.get(baseURL.category.url)
            .then(rs=>{
                this.setState({
                    tags:rs.data
                })
            })
    }
    async deleteCategory(catName){
        const rs = await axios.delete(baseURL.delete_category.url + catName);
        if (rs.status === 204){
            this.refresh();
        }else {
            alert("Errors");
        }
    }
    refresh(){
        axios.get(baseURL.category.url)
            .then(rs=>{
                this.setState({
                    tags:rs.data
                })
            })
    }
    render() {
        const categories = this.state.tags
        return(
            <div className="col-lg-10 pl-65">
                <h2>Categories</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Category Name</th>
                        <th><Link to="/add-category" className="btn btn-primary">Add Category</Link></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        categories.map((e,k)=>{
                            return (
                                <tr>
                                    <td>{e.catName}</td>
                                    <td>
{/*
                                        <Link className="btn btn-outline-primary" to={"/edit-category/"+e.catName}>Edit</Link>&nbsp;
*/}
                                        <button type="button" onClick={this.deleteCategory.bind(this,e.catId)} className="btn btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}