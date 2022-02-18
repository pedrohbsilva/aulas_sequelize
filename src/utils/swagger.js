const swaggerAutogen = require('swagger-autogen')()
const outputFile  = './src/swagger_output.json';

const endpointsFiles = ['./src/index.js'];
    
const doc = {
    info: {
    title: 'My API',
    description: 'Description',
    },
    host: process.env.HOST || 'localhost:3333',
    securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'authorization',
          in: 'header',
        }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
};

swaggerAutogen(outputFile , endpointsFiles, doc)
