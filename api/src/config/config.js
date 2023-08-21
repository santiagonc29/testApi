// config/config.js

const config = {
    development: {
      port: 3000,
    },
    production: {
      port: process.env.PORT || 3000,
    },
  };
  
  module.exports = config;
  