import express from "express";
import { calculateBmi } from "./bmi-calculator";

const app = express();
const port = 3002;

app.get("/hello", (_request, response) => {
  response.send("Hello Full Stack!");
});

app.get("/bmi", (request, response) => {
  const { height, weight } = request.query;
  if (!height || isNaN(Number(height))) {
    return response.status(400).json({ error: "malformatted height" });
  }
  if (!weight || isNaN(Number(weight))) {
    return response.status(400).json({ error: "malformatted weight" });
  }

  const bmi = calculateBmi(Number(height), Number(weight));

  return response.json({
    weight: Number(weight),
    height: Number(height),
    bmi,
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
