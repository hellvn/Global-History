import React from "react";
import {Link} from "react-router-dom";

export default class Post_Manage extends React.Component{
    render() {
        return(
            <div className="col-lg-10 pl-65">
                <h2>Categories</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Post Name</th>
                        <th>Category</th>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>
                            {/*<Link className="btn btn-outline-primary" to={"/edit-category/"+e.catName}>Edit</Link>&nbsp;*/}
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}