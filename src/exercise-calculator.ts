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

export function calculateExercises(
  dailyExercises: number[],
  targetHours: number
): Result {
  const periodLength = dailyExercises.length;
  const trainingDays = dailyExercises.filter((hour) => hour !== 0).length;
  const success = dailyExercises.every((hour) => hour > 0);
  const totalHours = dailyExercises.reduce((total, hour) => total + hour, 0);
  const average = totalHours / periodLength;
  const rating = average < targetHours / 2 ? 1 : average <= targetHours ? 2 : 3;
  const ratingDescription = ratings[rating];

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target: targetHours,
    average,
  };
}

// try {
//   const args = process.argv.slice(2);
//   const [target, ...dailyHours] = parseNumberParams(...args);

//   console.log(calculateExercises(dailyHours, target));
// } catch (error) {
//   let errorMessage = "Something bad happend. ";
//   if (error instanceof Error) {
//     errorMessage += error.message;
//   }

//   console.error(errorMessage);
// }
