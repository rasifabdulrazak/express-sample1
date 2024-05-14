const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const path = require('path');

const options = {
  swaggerDefinition: {
    restapi: '3.0.0',
    info: {
      title: 'Api Documentation',
      version: '1.0.0',
      description: 'Backend Apis',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ["./routes/*.js"],
}

const specs = swaggerJsdoc(options)

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}