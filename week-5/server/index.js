const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("YOUR_MONGO_URL");

const cardSchema = new mongoose.Schema({
  name: String,
  description: String,
  linkedIn: String,
  twitter: String,
  instagram: String,
  facebook: String,
  interests: [String],
});

const Card = mongoose.model("Card", cardSchema);

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const data = await Card.find({});
  res.send(data);
});

app.get("/single", async (req, res) => {
  const id = req.query.id;
  console.log("Fetching");
  console.log(id);
  const data = await Card.find({ _id: id });
  console.log(data);
  res.send(data);
});

app.post("/save", async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const linkedIn = req.body.linkedIn;
  const twitter = req.body.twitter;
  const instagram = req.body.instagram;
  const facebook = req.body.facebook;
  const interests = req.body.interests;
  console.log(name);
  const card = new Card({
    name: name,
    description: description,
    linkedIn: linkedIn,
    twitter: twitter,
    instagram: instagram,
    facebook: facebook,
    interests: interests,
  });
  await card.save();
  res.send("Data saved");
});

app.put("/update", async (req, res) => {
  const oldCard = req.body.oldCard;
  console.log(oldCard);
  const newCard = req.body.newCard;
  console.log(newCard);
  const updatedCard = await Card.findOneAndUpdate(oldCard, newCard, {
    new: true,
  });
  console.log(updatedCard);
  res.send(updatedCard);
});

app.delete("/delete", async (req, res) => {
  const id = req.body.id;
  console.log(id);
  await Card.deleteOne({ _id: id });
  res.send("Deleted");
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
