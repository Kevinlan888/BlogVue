const LoginUrl = "http://localhost:61468/api/users/login";  //"/api/users/login";
const GetPostUrl = "http://localhost:61468/api/posts/get";  //"/api/posts/get";
const AddPostUrl = "http://localhost:61468/api/posts/AddPost"; ///api/posts/AddOrEdit

import axios from 'axios'
import store from '@/store'

const BuildAuthHeaders = (token) => {
    return {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    };
}

export const Login = async (userName, password) => {
    return await axios.post(LoginUrl, {
        UserName: userName,
        Password: password
    })
        .then((res) => {
            if (res.status == 200) {
                return res.data;
            } else {
                return null;
            }
        })
}

export const GetAllPostDescs = async () => {
    return await axios.get(GetPostUrl)
        .then((res) => {
            if (res.status == 200) {
                return res.data;
            } else {
                return null;
            }
        });
}

export const GetPost = async (slug) => {
    return await axios.get(GetPostUrl + "/" + slug).
        then(function (res) {
            if (res.status == 200) {
                return res.data;
            } else {
                return null;
            }
        });
}

export const AddOrUpdatePost = async (post) => {
    return await axios.put(AddPostUrl, post)
        .then((res => {
            if (res.status == 200) {
                return res.data;
            } else {
                return null;
            }
        }))
}