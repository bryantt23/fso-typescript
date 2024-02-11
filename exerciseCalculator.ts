interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

function calculateExercises(days: number[], target: number): Result {
    const length = days.length
    const average = days.reduce((prev, cur) => prev + cur, 0) / length
    const score = average / target
    const rating = score > 1 ? 3 : score === 1 ? 2 : 1

    return {
        periodLength: length,
        trainingDays: days.filter(day => day > 0).length,
        target,
        average,
        success: average >= target,
        rating,
        ratingDescription: rating === 3 ? "good" : rating === 2 ? "ok" : "poor"
    }
}
/*
Write a function calculateExercises that calculates the average time of daily exercise 
hours and compares it to the target amount of daily hours and returns an 
object that includes the following values:

the number of days
the number of training days
the original target value
the calculated average time
boolean value describing if the target was reached
a rating between the numbers 1 - 3 that tells how well the hours are met.You can decide on the metric on your own.
a text value explaining the rating, you can come up with the explanations
The daily exercise hours are given to the function as an array that contains the number of exercise hours for each day in the training period.Eg.a week with 3 hours of training on Monday, none on Tuesday, 2 hours on Wednesday, 4.5 hours on Thursday and so on would be represented by the following array:

[3, 0, 2, 4.5, 0, 3, 1]copy
For the Result object, you should create an interface.

If you call the function with parameters[3, 0, 2, 4.5, 0, 3, 1] and 2, it should return:

{
    periodLength: 7,
    trainingDays: 5,
    success: false,
    rating: 2,
    ratingDescription: 'not too bad but could be better',
    target: 2,
    average: 1.9285714285714286
} 
*/

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))