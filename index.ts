const express = require('express');
const app = express();
import { calculateBmi } from "./bmiCalculator";

app.get('/hello', (_req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req: any, res: any) => {
    // Attempt to convert query parameters to numbers
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    // Validate the converted numbers
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        return res.status(400).send({ error: "Both height and weight must be valid, positive numbers." });
    }
    try {
        const bmi = calculateBmi(height, weight)
        res.json({ height, weight, bmi });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});