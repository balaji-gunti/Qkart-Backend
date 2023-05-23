const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server=config.port;
// const MONGODB_URL= "mongodb://127.0.0.1:27017";

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

const PORT = process.env.PORT || 3000;
app.listen(server, () => {
  console.log(`Server listening on port ${PORT}`);
});
