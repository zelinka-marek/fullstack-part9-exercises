function calculateBmi(height: number, weight: number) {
  const bmi = Number((weight / Math.pow(height / 100, 2)).toFixed(1));

  if (bmi < 16) {
    return "Underweight (Severe thinness)";
  } else if (bmi >= 16 && bmi <= 16.9) {
    return "Underweight (Moderate thinness)";
  } else if (bmi >= 17 && bmi <= 18.4) {
    return "Underweight (Mild thinness)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal range";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight (Pre-obese)";
  } else if (bmi >= 30 && bmi <= 34.9) {
    return "Obese (Class I)";
  } else if (bmi >= 35 && bmi <= 39.9) {
    return "Obese (Class II)";
  } else {
    return "Obese (Class III)";
  }
}

console.log(calculateBmi(174, 72));
