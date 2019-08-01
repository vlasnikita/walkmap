const http = require('http');
const totem = require('./totem.json')
const cone = require('./cone.json')
const wc = require('./wc.json')
const exit1 = require('./exit1.json')
const exit2 = require('./exit2.json')
const exit3 = require('./exit3.json')
const exit4 = require('./exit4.json')
const exit5 = require('./exit5.json')
const exit6 = require('./exit6.json')
const exit7 = require('./exit7.json')
const exit8 = require('./exit8.json')
const exit9 = require('./exit9.json')
const exit10 = require('./exit10.json')
const exit11 = require('./exit11.json')
const exit12 = require('./exit12.json')

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    switch(req.url){
        case '/totem':
            res.end(JSON.stringify(totem));
        case '/cone':
            res.end(JSON.stringify(cone));  
        case '/wc':
            res.end(JSON.stringify(wc));            
        case '/exit1':
            res.end(JSON.stringify(exit1));
        case '/exit2':
            res.end(JSON.stringify(exit2));
        case '/exit3':
            res.end(JSON.stringify(exit3));   
        case '/exit4':
            res.end(JSON.stringify(exit4));
        case '/exit5':
            res.end(JSON.stringify(exit5));
        case '/exit6':
            res.end(JSON.stringify(exit6));   
        case '/exit7':
            res.end(JSON.stringify(exit7));
        case '/exit8':
            res.end(JSON.stringify(exit8));
        case '/exit9':
            res.end(JSON.stringify(exit9));   
        case '/exit10':
            res.end(JSON.stringify(exit10));
        case '/exit11':
            res.end(JSON.stringify(exit11));
        case '/exit12':
            res.end(JSON.stringify(exit12));                    
        default:
            res.end('answer');

    }
    // Send back a response and end the connectio
});

// Start the server on port 3000
app.listen(process.env.PORT || 3000)
console.log('Node server running on port 3000');