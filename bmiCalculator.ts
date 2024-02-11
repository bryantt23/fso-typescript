export const calculateBmi = (height: number, weight: number): string => {
    // Validate input parameters
    if (height <= 0 || weight <= 0) {
        throw new Error("Height and weight must be positive numbers.");
    }

    const heightInMeters = height / 100; // assuming height is in cm, converting to meters
    const bmi = weight / (heightInMeters * heightInMeters);

    if (bmi < 16.0) {
        return "Underweight (Severe thinness)";
    } else if (bmi >= 16.0 && bmi <= 16.9) {
        return "Underweight (Moderate thinness)";
    } else if (bmi >= 17.0 && bmi <= 18.4) {
        return "Underweight (Mild thinness)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal range";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "Overweight (Pre-obese)";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        return "Obese (Class I)";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
        return "Obese (Class II)";
    } else if (bmi >= 40.0) {
        return "Obese (Class III)";
    } else {
        return "Invalid BMI";
    }
}

// const a: number = Number(process.argv[2])
// const b: number = Number(process.argv[3])
// console.log(calculateBmi(a, b)); // height in cm, weight in kg
