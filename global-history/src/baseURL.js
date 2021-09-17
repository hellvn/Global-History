const base_url = "https://localhost:44361"
export const baseURL = {
    category:{
        url: base_url + "/api/Categories",
        params:{},
        method:"GET"
    },
    add_category:{
        url: base_url + "/api/Categories",
        params:JSON.stringify({
                catName:""
        }),
        method:"POST"
    },
    posts:{
        url: base_url + "/api/Posts/",
        params:{},
        method:"GET"
    },
    detail_category:{
        url: base_url + "/api/Categories/",//+catName
        params:{},
        method:"GET"
    },
    edit_category:{
        url: base_url + "/api/Categories/",//+catName
        params:JSON.stringify({
            catName:""
        }),
        method:"PUT"
    },
    delete_category:{
        url: base_url + "/api/Categories/",//+catName
        params:{},
        method:"DELETE"
    },
    postCat:{
        url: base_url + "/api/PostCats/",
        params:{},
        method:"GET"
    }
}