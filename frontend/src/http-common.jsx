import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:3005/api/v1/restaurants", //localhost
    baseURL: "https://restaurant-review-backend.vercel.app/api/v1/restaurants",
    headers: {
        "Content-type": "application/json"
    }
})