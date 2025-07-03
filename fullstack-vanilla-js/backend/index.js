//Install express module
import express from 'express';

// Create an express application
const app = express();

const PORT = 3000;

app.use(express.json());

const exercise = [
    {
        id: 1,
        exercise: "Bench Press",
        weight: "100kg"
    },
    {
        id: 2,
        exercise: "incline Dumbell Press",
        weight: "40kg"
    },
    {
        id: 3,
        exercise: "Cable Flies",
        weight: "20kg"
    }    
]

app.get('/', (req, res) => {
    res.json({msg:"Todo List"});
});

app.get('/exercise', (req,res) => {
    res.json(exercise);
});

//GET, POST, PUT, DELETE, PATCH

app.get('/exercise/:id', (req,res)=> {
    res.json({msg:"exercise 1"});
});

app.post('/exercise', (req,res) => {
    res.json({msg:"add exercise"});
})

app.put('/exercise/:id', (req, res) => {
    res.json({msg: "update exercise"});
})

app.delete('/exercise/:id', (req,res) => {
    res.json({msg:"delete exercise"});
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});