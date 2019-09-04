'use strict';

const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({
  port: 15732
});

console.log("Web socket listening on 15732");

wss.on('request', (req, res) => {
  let response = 'request(): '+new Date();
  console.log(response);
  res.writeHead(200);
  res.end(response);
});

wss.on('connection', (ws) => {
    console.log('on - connection')
    ws.send('connected');

    ws.on('message', (data) => {
      let response = 'message(): '+ data + ' - '+new Date();
      console.log(response);
      ws.send(response);
    });
    ws.on('close', () => {
      console.log('socket closed');
    });
});
