import React from "react";
import { Redirect,withRouter} from "react-router-dom";
import axios from "axios";
import {baseURL} from "../baseURL";

class EditCategory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category:{
                catName:""
            },
            redirect:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        const catName = this.props.match.params.catName;
        axios.get(baseURL.detail_category.url + catName)
            .then(rs=>{
            this.setState({
                category:rs.data
            });
        })
    }

    handleChange(e){
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
        axios.put(baseURL.edit_category.url + category.catName,json,{
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
        const redirect = this.state.redirect;
        return(
            <div className="row">
                {redirect?<Redirect to="/manage_category"/>:null}
                <div className="col-lg-6">
                    <h2>Edit : {category.catName}</h2>
                    <section className="text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Enter new category name</label>
                                <input name="catName" onChange={this.handleChange} value={category.catName} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">Change</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}
export default withRouter(EditCategory);