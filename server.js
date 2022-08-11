const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3004; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);


/**
 * 
 
 {
      "id": "1258-djx",
      "1258-djx": {
        "name": "entertentment",
        "link": "https://abc.com"
      }
    },
 */