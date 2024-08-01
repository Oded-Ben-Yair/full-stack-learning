import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Route for the form page
app.get('/', (req, res) => {
    res.sendFile('w_s_4.html', { root: '.' });
});

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    res.send(`Name: ${name} <br> Email: ${email}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
