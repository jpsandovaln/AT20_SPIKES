const express = require('express');
const listEndpoints = require('express-list-endpoints');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();

// Get the list of endpoints
const endpoints = listEndpoints(app);

// Define Swagger specification options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
    },
  },
  apis: [], // Leave empty for now
};

// Add each endpoint to the Swagger specification
endpoints.forEach(endpoint => {
  const method = endpoint.methods[0].toUpperCase();
  const path = endpoint.path;
  swaggerOptions.apis.push({
    path: `.${path}`,
    method,
    operationId: `${method}_${path.replace(/\//g, '_')}`,
  });
});

// Create Swagger specification object
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI and YAML file at /docs
app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(swaggerSpec));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});