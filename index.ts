import express, { Request, Response } from 'express';
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from './exerciseCalculator';


const app = express();
const PORT = 3003;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/hello', (_req: Request, res: Response) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req: Request, res: Response): void => {
    // Attempt to convert query parameters to numbers
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    // Validate the converted numbers
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        res.status(400).json({ error: "Both height and weight must be valid, positive numbers." });
    }
    try {
        const bmi = calculateBmi(height, weight);
        res.json({ height, weight, bmi });
    } catch (error) {
        const typedError = error as Error;
        res.status(500).json({ error: typedError.message });
    }
});

app.post('/exercises', (req: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target, exerciseHours } = req.body;

    // Check for missing parameters
    if (target === undefined || exerciseHours === undefined) {
        res.status(400).json({ error: "parameters missing" });
    }

    // Check for malformatted parameters: target should be a number, and exerciseHours should be an array of numbers
    if (typeof target !== 'number' || !Array.isArray(exerciseHours) || !exerciseHours.every(day => typeof day === 'number')) {
        res.status(400).json({ error: "malformatted parameters" });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculateExercises(Number(target), exerciseHours);
    res.send({ result });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
