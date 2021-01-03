const express = require('express')
const app = express()
port = 5000

app.get('/', (req, res)=>{
    res.send('This is the main page')
});

app.listen(port, ()=>{
    console.log(`app is listening at http://localhost{port}`);
});
