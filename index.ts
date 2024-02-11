const express = require('express');
const app = express();
import { calculateBmi } from "./bmiCalculator";

app.get('/hello', (_req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req: any, res: any) => {
    const { height, weight } = req.query
    try {
        const bmi = calculateBmi(height, weight)
        res.json({ height, weight, bmi });
    } catch (error) {
        res.send(error)
    }
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});