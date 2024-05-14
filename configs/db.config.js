const mongoose = require("mongoose")

const DATABASE = process.env.DATABASE
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

const URL = `${DATABASE}://${DB_HOST}:${DB_PORT}/${DB_NAME}`

module.exports = {
  url: URL
};
