import axios from "axios";

export let PRODUCTSAPI=axios.create({
    baseURL:"http://localhost:4000/"
})