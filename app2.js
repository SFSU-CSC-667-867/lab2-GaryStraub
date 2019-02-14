// console.log('Hello World');
const express = require('express');
const app = express();
const port = 3001;

// app.get('/', (req, res) => {
//     console.log(req.query);
//     res.send('Hello ' + req.query.name);
// });
// app.get('/network', (req, res) => {
//     axios.get('http://localhost:3001/world')
//     .then((networkResponse) => {pm2  
//         res.send(networkResponse.data);
//     })
//     .catch(() => {
//         res.send(':( Didnt work.');

//     });
// });
app.get('/world', (req, res) => res.send('This is app 2, Wooohoo!'));
app.get('/add', (req, res) => res.send('0'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));