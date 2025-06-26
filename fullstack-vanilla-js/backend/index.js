//Install express module
import express from 'express';

// Create an express application
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({msg:"Todo List"});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});