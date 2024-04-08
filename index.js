import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs")
})

app.get("/form", (req, res) => {
  res.render("form.ejs")
})

app.post("/submit", (req, res) => {
  res.render("views.ejs", {
    date : req.body["today-date"],
    fullName : req.body["fName"],
    mobNum : req.body["phone"],
    email : req.body["email"]
  });
})

app.get("/views", (req, res) => {
  res.render("views.ejs")
})

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
