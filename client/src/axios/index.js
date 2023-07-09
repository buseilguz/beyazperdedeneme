import axios from 'axios'

const HTTP=axios.create({
    baseURL: 'https://reactapp-0xe1.onrender.com/',
})
export const login=async(formData)=> 
await HTTP.post('users/signin',formData);

export const register=async(formData)=> 
await HTTP.post('users/signup',formData);

export const addnews=async(formData)=> 
await HTTP.post('news/addnews',formData);

export const addtvseries=async(formData)=> 
await HTTP.post('tvseries/addtvseries',formData);

export const getall= async(formData)=>
await HTTP.get('news/getall',formData);

export const getallseries= async(formData)=>
await HTTP.get('tvseries/getall',formData);

export const getpopuler= async(formData)=>
await HTTP.get('tvseries/getpopuler',formData);

export const getnews= async(formData)=>
await HTTP.get('news/getnews/:id',formData);