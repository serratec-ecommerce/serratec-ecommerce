import axios from "axios";
import utilStorage from '../utils/storage';

const api = axios.create({
    baseURL: 'https://serratec-ecomerce.herokuapp.com'
})

// http.interceptors.request.use(
//     (config)=> {
//         const token = localStorage.getItem('token')
//         if(token){
//         config.headers.Authorization =` Bearer ${token}`
//     }
//     return config
// },
//     (error) =>{
//         return Promise.reject(error)
//     },
// )

// const api = axios.create({
//     baseURL:'https://seguranca-web-serratec.herokuapp.com'
// })


api.interceptors.request.use((config) => {
    // Aqui tenho que pegar o token do storage e enviar na requisição.
    let token = utilStorage.obterTokenNaStorage();

    if(token) {
        config.headers.Authorization = token; 
    }

    return config;
});


export default api;
