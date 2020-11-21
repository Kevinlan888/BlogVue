
//    Test environment
// const LoginUrl = "http://localhost:5001/api/users/login";  
// const GetPostUrl = "http://localhost:5001/api/posts/get";  
// const AddPostUrl = "http://localhost:5001/api/posts/AddPost"; 


const LoginUrl = "/api/users/login";  
const GetPostUrl = "/api/posts/get";  
const AddPostUrl = "/api/posts/AddPost"; 

import axios from 'axios'
import store from '@/store'

export const Login = async (userName, password) => {
    return await axios.post(LoginUrl, {
        UserName: userName,
        Password: password
    })
        .then((res) => {
            if (res) {
                return res.data;
            } else {
                return null;
            }
        })
}

export const GetAllPostDescs = async () => {
    return await axios.get(GetPostUrl)
        .then((res) => {
            if (res) {
                return res.data;
            } else {
                return null;
            }
        });
}

export const GetPost = async (slug) => {
    return await axios.get(GetPostUrl + "/" + slug).
        then(function (res) {
            if (res) {
                return res.data;
            } else {
                return null;
            }
        });
}

export const AddOrUpdatePost = async (post) => {
    return await axios.put(AddPostUrl, post)
        .then((res => {
            if (res) {
                return res.data;
            } else {
                return null;
            }
        }))
}