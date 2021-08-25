"use strict";

const getUser = (request, response) => {
    return response.json( {message: "Restserver"} ) 
}

module.exports = {
    getUser
}