import axios from 'axios';

export function loginPrueba(data){
console.log(data.username);
 var body = {
    email: data.username,
    password: data.password
}
    axios({
    method: 'post', 
    url: 'https://1d15b4dc83d6.ngrok.io/User/login',
    data: body,
    headers: { 'Accept': 'application/json', 'Content-type': 'application/json' },
    })
}