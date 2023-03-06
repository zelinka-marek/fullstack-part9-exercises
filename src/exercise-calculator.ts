type Result = {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
};

const ratings = {
  1: "better luck next time",
  2: "not too bad but could be better",
  3: "very good, keep going",
};

function calculateExercises(dailyHours: number[], target: number): Result {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((hour) => hour !== 0).length;
  const success = dailyHours.every((hour) => hour > 0);
  const totalHours = dailyHours.reduce((total, hour) => total + hour, 0);
  const average = totalHours / periodLength;
  const rating = average < target / 2 ? 1 : average <= target ? 2 : 3;
  const ratingDescription = ratings[rating];

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
