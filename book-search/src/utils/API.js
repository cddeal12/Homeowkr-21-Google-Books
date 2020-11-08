import axios from "axios";

const API = {
    searchBooks: function() {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=Art")
        .then( function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        }).then(console.log("Ran Search.."));
    }
};

export default API;