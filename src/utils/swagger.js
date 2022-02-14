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
        api_key: {
          type: 'apiKey',
          name: 'authorization',
          in: 'header',
        }
    }
};

swaggerAutogen(outputFile , endpointsFiles, doc)
