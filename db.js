const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  if (process.env.NODE_ENV !== "test") {
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }
};

module.exports = connectDB;

