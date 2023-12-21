const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:Harkirat%402019@cluster0.muvw6r6.mongodb.net/userapp"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  courses: [Number],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  id: Number,
  title: String,
  description: String,
  price: Number,
  imagelink: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
