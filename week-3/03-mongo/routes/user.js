const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = Router();

// User Routes
router.route("/signup").post((req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  const courses = [];
  const user = new User({
    username: username,
    password: password,
    courses: courses,
  });
  user.save().then(() => {
    res.json({ message: "User created successfully" });
  });
});

router.route("/courses").get(async function (req, res) {
  // Implement listing all courses logic
  const data = await Course.find({});
  res.json(data);
});

router
  .route("/courses/:courseId")
  .post(userMiddleware, async function (req, res) {
    // Implement course purchase logic
    const courseId = parseInt(req.params.courseId);
    const username = req.headers.username;
    User.updateOne(
      { username: username },
      { $push: { courses: courseId } }
    ).then(() => {
      res.json({ message: "Course purchased successfully" });
    });
  });

router
  .route("/purchasedCourses")
  .get(userMiddleware, async function (req, res) {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const userdata = await User.findOne({ username: username });
    const courseIDs = userdata.courses;
    const purchasedCourses = await Course.find({ id: { $in: courseIDs } });
    res.json(purchasedCourses);
  });

module.exports = router;
