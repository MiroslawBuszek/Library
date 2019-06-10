const express = require('express');
const chalk = require('chalk')

const app = express();


app.get('/', function(req, res){
    res.send('Hello from my app')
})

app.listen(3000, function(){
    console.log('listening on port ' + chalk.green('3000'));
    
})