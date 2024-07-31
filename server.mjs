import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port =3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'comments.html')); 
});

let comments = [];

app.get('/api/comments', (req, res) => {
    res.json(comments);
});

app.post('/api/comments', (req, res) => {
    // Ensure there is a comment to add
    if (req.body && req.body.comment) {
        comments.push(req.body.comment);  // Add the comment to the array
        // Respond with the updated comments list and a success message
        res.status(201).json({ message: "Comment added successfully", comments: comments });
    } else {
        // Respond with an error if no comment is provided
        res.status(400).json({ message: "No comment provided" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
