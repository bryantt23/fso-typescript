import express, { Request, Response } from 'express';
import { calculateBmi } from "./bmiCalculator";

const app = express();
const PORT = 3003;

app.get('/hello', (_req: Request, res: Response) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req: Request, res: Response) => {
    // Attempt to convert query parameters to numbers
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    // Validate the converted numbers
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        return res.status(400).json({ error: "Both height and weight must be valid, positive numbers." });
    }
    try {
        const bmi = calculateBmi(height, weight);
        res.json({ height, weight, bmi });
    } catch (error) {
        const typedError = error as Error;
        res.status(500).json({ error: typedError.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
