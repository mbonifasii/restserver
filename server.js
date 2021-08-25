"use strict"

// Import express framework
const express = require("express");
const cors = require("cors");

// - Import routes
const { userRoutes } = require("./routes/index")

class RestServer {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = "/api/user"


        // Middlewares configurations
        this.middlewares();


        // Routes configurations
        this.routes();

    }


    middlewares(){

        // CORS
        this.app.use( cors() )

        // Parse request body to JSON
        this.app.use( express.json() )
        this.app.use( express.urlencoded( { extended:true } ) )

    }

    routes(){

        this.app.use( this.userPath, userRoutes )

    }

    listening(){

        this.app.listen(this.port, () => {

            console.log(`Server running at port ${ this.port }`);

        } )

    }


}

module.exports = RestServer