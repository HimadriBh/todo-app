const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    autoIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("error occuured while connected to the database... ", err))
}

module.exports = connectDB;