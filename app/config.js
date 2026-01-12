const AWS = require("aws-sdk");
require('dotenv').config();

AWS.config.update({
  region: "ap-south-1"
});
const S3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

module.exports = {
  S3: S3,
  // database: 'mongodb://moshikhayaka:moshikhayaka@localhost:27017/moshikhayaka',
  database: process.env.DATABASE,
  serverSecret: process.env.SERVER_SECRET,
  tokenExpire: process.env.TOKEN_EXPIRE,
  google_api_key: process.env.GOOGLE_API_KEY,
};