const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));
// setup static and middleware
// app.get('/',(req,res)=>
// {
//     res.sendFile(path.resolve('./navbar-app/index.html'))

// })

app.all("*", (req, res) => {
  res.status(404).send("Resource Not Found");
});

app.listen(3000, () => {
  console.log("SERVER IS LISTENING ON PORT 3000...");
});
