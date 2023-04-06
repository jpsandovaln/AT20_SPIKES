const swaggerJSDoc = require('swagger-jsdoc');
const fetch = require('node-fetch');

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

// Fetch API endpoints
fetch('http://localhost:8818/api/v1/interview/')
  .then(response =>response.json())
  .then(data => {
    // Add each endpoint to the Swagger specification
    data.forEach(endpoint => {
      const method = endpoint.method.toUpperCase();
      const path = endpoint.path;
      swaggerOptions.apis.push({
        path: `.${path}`,
        method,
        operationId: `${method}_${path.replace(/\//g, '_')}`,
      });
    });

    // Create Swagger specification object
    const swaggerSpec = swaggerJSDoc(swaggerOptions);

    // Do something with the Swagger specification object
    console.log(swaggerSpec);
  });