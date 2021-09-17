import React from "react";
import axios from "axios";
import {baseURL} from "../baseURL";
import {Link} from "react-router-dom";
import {Redirect} from 'react-router-dom';

export default class AddCategory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category:{
                catName:""
            },
            existingCategory:[],
            redirect:false
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount(){
        axios.get(baseURL.category.url)
            .then(rs=>{
                this.setState({
                    existingCategory:rs.data
                })
            })
    }
    handleChange(e){
       /* console.log(e);
        const test = e;
        debugger;*/
        const key = e.target.name;
        const v = e.target.value;
        let category = this.state.category;
        category[key] = v;
        this.setState({
            category: category
        })
    }
    submit(e){
        const category = this.state.category;
        const json = JSON.stringify(category);
        axios.post(baseURL.add_category.url,json,{
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*"
            }
        }).then(rs=>{
            this.setState({
                redirect:true
            })
        })
        e.preventDefault();
    }
    render() {
        const category = this.state.category;
        const existing = this.state.existingCategory;
        const redirect = this.state.redirect;
        return(
            <div className="row">
                {redirect?<Redirect to="/manage_category"/>:null}
                <div className="col-lg-6">
                    <h2>Add new category</h2>
                    <section className="text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Enter category name</label>
                                <input name="catName" onChange={this.handleChange} value={category.catName} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">Add</button>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="col-lg-6">
                    <h2>Category Existing</h2>
                    {
                        <ul className="blog-categorie">
                            {
                                existing.map((e,k)=>{
                                    return (
                                        <li key={k}>
                                            <Link to={"/category/"+ e.catName}>{e.catName}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            </div>
        )
    }
}