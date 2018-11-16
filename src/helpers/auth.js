export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('http://lanet.loc/api/login', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej('Wrong credentials', err);
            })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem('user');

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}