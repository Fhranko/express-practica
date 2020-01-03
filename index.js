const express = require('express');
const app = express();

function logger(req, res, next){
    console.log(`Route Recived: ${req.protocol}://${req.get('host')}${req.originalUrl} `);
    next();
}; 

app.use(express.json());
app.use(logger);

app.listen(3000, ()=>{
    console.log('Server on port 3000');
});

app.all('/user',(req, res, next) => {
    console.log('This is the way');
    next();
});

app.get('/user', (req, res) => {
    res.json({
        username: "Franco",
        lastname: "Huanaco"
    });
});

app.post('/user', (req, res) => {
    res.send(req.body);
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} Updated`);
});

app.delete('/user/:id', (req, res) => {
    res.send(`User ${req.params.id} Deleted`);
});

