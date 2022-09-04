const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  databaseURL: process.env.MONGODB_URI,
  development_databaseURL: process.env.DEVELOPMENT_URI,
  environment: process.env.ENVIRONMENT,
  secret: process.env.SECRET,
};
