const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>');
});

app.get('/alternate', (req, res)=>{
    res.send('woohoo! you reached the alterate route!')
});

app.get('/about', (req,res)=>{
    res.send('My name is Rajneel, and i created this route, for testing nodemon! works fine.')
});

app.listen(3000, ()=>{
    console.log('server started on port 3000');
});