import express from "express";

const app = express();
const port = 3003;

app.get("/hello", (_request, response) => {
  response.send("Hello Full Stack!");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
