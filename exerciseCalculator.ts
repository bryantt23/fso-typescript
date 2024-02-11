interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

function calculateExercises(target: number, days: number[]): Result {
    const length = days.length;
    const average = days.reduce((prev, cur) => prev + cur, 0) / length;
    const score = average / target;
    const rating = score > 1 ? 3 : score > 0.5 ? 2 : 1; // Adjusted to reflect a more nuanced rating system

    return {
        periodLength: length,
        trainingDays: days.filter(day => day > 0).length,
        target,
        average,
        success: average >= target,
        rating,
        ratingDescription: rating === 3 ? "good" : rating === 2 ? "not too bad but could be better" : "poor",
    };
}

const target: number = Number(process.argv[2]);
const exerciseHours: number[] = process.argv.slice(3).map(Number);
console.log(calculateExercises(target, exerciseHours));
