const express = require('express');
const PORT = process.env.PORT || 9000;
const cors = require('cors');
const {resolve} = require('path');

const app = express();

app.use('/api', cors());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

function log(msg) {
    return (req, res, next) => {
        console.log(msg, res);
        next();
    }
}
function getUser() {
    return (req, res, next) => {
        req.username = { name: 'b', password: 'mypass1234' };
        next();
    }
}

// app.use('/api/get-stuff', log('middle waring'));

app.get('/api/get-stuff', (req, res) => {
    res.send({ success: true, message: 'here is the stuff form the backend' });
});

app.post('/api/get-user', (req, res) => {
    res.send({ success: true, username: 'username test', password: 'i can\'t tell you that' })
})

app.get('**/**/*', (req, res) => {
    res.send(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on PORT: ' + PORT);
});