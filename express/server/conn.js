const mongoose = require('mongoose'); // No need to destructure 'default'
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Error found: " + err);
  });

// .connect(DB_name)....it returns a promise so we can use .then when it returns something
