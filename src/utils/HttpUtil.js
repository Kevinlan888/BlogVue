const LoginUrl = "/api/users/login";
const GetPostUrl = "/api/posts/get";

const BuildAuthHeaders = (token) => {
    return {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    };
}

export const Login = async (userName, password) => {
    var body = {
        UserName: userName,
        Password: password
    };  
    return await fetch(LoginUrl, {
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST'
    }).
        then(function (res) {
            if (res.ok) {
                return res.json();
            } else {
                return null;
            }
        });
}

export const GetAllPostDescs = async () => {
    return await fetch(GetPostUrl)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return null;
            }
        });
}

export const GetPost = async (slug) => {
    return await fetch(GetPostUrl + "/" + slug).
        then(function (res) {
            if (res.ok) {
                return res.json();
            } else {
                return null;
            }
        });
}
