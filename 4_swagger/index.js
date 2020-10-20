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
 const swaggerSpec = swaggerJsdoc(options);

//Provides Web page with 'Try Out' feature. Can be used by developers for testing the endpoints.
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs",swaggerUi.setup(swaggerSpec, {explorer: true}));

//Provides Openapi specification in JSON format. Can be used to provision Azure APIM service.
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

  
app.listen(3000, () => console.log(`Swagger That API listening on port 3000!`));
