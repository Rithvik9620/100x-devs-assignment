const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.route("/signup").post((req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  const admin = new Admin({
    username: username,
    password: password,
  });
  admin.save().then(() => {
    res.json({ message: "Admin created successfully" });
  });
});

router.route("/courses").post(adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = parseInt(req.body.price);
  const imagelink = req.body.imagelink;
  const id = Math.floor(Math.random() * 100) + 1;
  const course = new Course({
    id: id,
    title: title,
    description: description,
    price: price,
    imagelink: imagelink,
  });
  course.save().then(() => {
    res.json({
      message: "Course created successfully",
      courseId: id,
    });
  });
});

router.route("/courses").get(adminMiddleware, async function (req, res) {
  // Implement fetching all courses logic
  const data = await Course.find({});
  res.json(data);
});

module.exports = router;
