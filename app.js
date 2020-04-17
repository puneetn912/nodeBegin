// 2> Express Config 
var express = require('express');
var app = express();

let router = express.Router()

router.get('/', (req, res)=>{
    res.send('hello boi')
})
app.use('/', router);


// 1> Server config
const http = require('http');
const port = 3003;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at port 3003`);
});



