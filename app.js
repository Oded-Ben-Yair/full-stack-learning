const express = require('express');
const app = express();
app.listen(3000, () =>
{
    console.log('server is running on http://localhost:3000');
});

app.get('/', (req, res) => 
{
    res.send('Welcome to my express server!');
});

app.post('/greet', express.json(), (req, res) => {
    const { name } = req.body;
    res.send('Hello, ${name}!');
});




