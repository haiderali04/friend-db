const mongoose = require('mongoose');
const app = require('./app');
const DB = "mongodb+srv://huxxnainali:Mh10015mh@cluster0.z85io.mongodb.net/natours?retryWrites=true&w=majority"
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! :boom: Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });

mongoose
  .connect(DB, {
  })
  .then(() => console.log('DB connection successful!'));


  const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! :boom: Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });