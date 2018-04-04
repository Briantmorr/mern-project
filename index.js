const express = require('express');
const PORT = process.env.PORT || 9000;
const cors = require('cors');

const app = express();

app.use('/api', cors());

app.get('/api/get-stuff', (req, res) =>{
    res.send({success: true, message: 'here is the stuff form the backend'});
});

app.get('/', (req, res) => {
    res.send('<h1> My server...</h1>');
});

app.listen(PORT, () => {
    console.log('Server running on PORT: ' + PORT);
});