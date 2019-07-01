const express = require('express');
const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// const { userList, userIndex } = require('./socketManager');


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const path = require('path');
if (process.env.NODE_ENV !== 'production') {
    console.log('NOT PRODUCTION');
    require('dotenv').config({
        path: path.resolve(__dirname, '.env')
    });
}

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    console.log('PRODUCTION');
    const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
    console.log(`Client build path: ${clientBuildPath}\n`);
    app.use(express.static(clientBuildPath));
}

app.use(require('./controllers'));

app.get('*', (req, res) => {
    console.log('Catch all');
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// io.on('connection', function(socket) {
//     console.log('a user has connected on: ', socket.id)

//     const index = userIndex ? userIndex.length : 0
//     socket.on('new user', (user) => {
//         userList.push({username: user.username, socketId: socket.id, userId: user._id, index: index})
//         userIndex.push(user.username);
//         console.log("USER LIST", userList)
//     })
    
//     socket.on('chat message', function(msg) {
//         console.log('message:', JSON.stringify(msg.msg));
//         console.log(userList.length)
//         const user = userList.find(value => value.username === msg.to)
//         const fromUser = userList.find(value => value.username === msg.from)
//         console.log('USER', user, fromUser)
//         const newMsg = {
//             msg: msg,
//             user: user,
//         }
//         io.to(`${user.socketId}`).to(`${fromUser.socketId}`).emit('chat message', newMsg)
//     })
// });

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT, '...');
});

