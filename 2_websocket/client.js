const WebSocket = require('ws')

//const url = 'ws://localhost:15730/'

//hhcore VM IP
//const url = 'ws://3.19.72.99:15730/'
//const url = 'wss://3.19.72.99:15730/'

//ELB
//const url = 'ws://3.18.194.196:8443/';
const url = 'wss://tpn.hhdev.healthmosphere.network:8443/'

console.log('Connecting to '+url)

const connection = new WebSocket(url)
 
connection.onopen = () => {
  connection.send('Message From Client') 
}
 
connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
 
connection.onmessage = (e) => {
  console.log(e.data)
}