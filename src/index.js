const express = require('express');

const app = express();

app.get('/', (request, response) =>{
  return response.json({msg: 'OK!'});
})

app.listen(3000)