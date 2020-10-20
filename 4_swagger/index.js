"use strict";
// Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");

// App Modules
const routes = require("./Routes");

// Set up app
const app = express();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
app.use("/api/v1", routes);

// Swagger set up
const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      servers: [
        {
          url: "http://localhost:3000/api/v1"
        } 
      ]
    },
    apis: ["./Models/*", "./Routes/*"]
  };
  const specs = swaggerJsdoc(options);
 app.use("/api-docs", swaggerUi.serve);
 app.get("/api-docs",swaggerUi.setup(specs, {explorer: true}));

  
app.listen(3000, () => console.log(`Swagger That API listening on port 3000!`));
