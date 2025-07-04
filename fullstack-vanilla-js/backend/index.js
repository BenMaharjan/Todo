//Install express module
import express from 'express';
import * as uuid from 'uuid'; // Importing uuid for unique IDs

// Create an express application
const app = express();

const PORT = 3000;

app.use(express.json());

const exercises = [
    {
        id: 1,
        name: "Bench Press",
        weight: "100kg"
    },
    {
        id: 2,
        name: "incline Dumbell Press",
        weight: "40kg"
    },
    {
        id: 3,
        name: "Cable Flies",
        weight: "20kg"
    }    
]

app.get('/', (req, res) => {
    res.json({msg:"Todo List"});
});

app.get('/exercise', (req,res) => {
    res.json(exercises);
});

//GET, POST, PUT, DELETE, PATCH

app.get('/exercise/:id', (req,res)=> {
    let exercise = exercises.filter((exercises)=> exercises.id == req.params.id);
    res.json({
        msg:"exercise 1",
        data:exercise
    });
});

app.post('/exercise', (req,res) => {
    exercises.push({id: uuid.v4(), ...req.body});
    res.json({
        msg:"add exercise",
        data:exercises
    });
})

app.put('/exercise/:id', (req, res) => {
    let exercise = exercises.find((exercise)=>exercise.id == req.params.id)
    if(exercise) {
        exercise.name = req.body.name;
        exercise.weight = req.body.weight;
        res.json({
            msg: "update exercise", 
            data: exercises
        });
    } else {
        res.json({msg:"exercise not found"});
    }
})

app.delete('/exercise/:id', (req,res) => {
    let index = exercises.findIndex(exercise => exercise.id == req.params.id);
    exercises.splice(index,1);
    res.json({
        msg:"delete exercise",
        data:exercises
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});