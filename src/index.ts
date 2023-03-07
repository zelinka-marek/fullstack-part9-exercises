import express from "express";
import { calculateBmi } from "./bmi-calculator";
import { calculateExercises } from "./exercise-calculator";

const app = express();
const port = 3002;

app.use(express.json());

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

app.post("/exercises", (request, response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { exercises, target } = request.body;

  if (!exercises) {
    return response.status(400).json({ error: "parameters missing" });
  } else if (
    !Array.isArray(exercises) ||
    !exercises.every((ex) => !isNaN(Number(ex)))
  ) {
    return response.status(400).json({ error: "malformatted parameters" });
  }
  if (!target) {
    return response.status(400).json({ error: "parameters missing" });
  } else if (isNaN(Number(target))) {
    return response.status(400).json({ error: "malformatted parameters" });
  }

  const result = calculateExercises(exercises as number[], Number(target));

  return response.json(result);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
