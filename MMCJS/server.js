// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
let players = [];
let playerPositions = { player1Y: 250, player2Y: 250 };
let ball = {
    x: 400,
    y: 300,
    speedX: 4,
    speedY: 4
};
let player1Score = 0,
    player2Score = 0;
const WINNING_SCORE = 5;
io.on('connection', (socket) => {
    if (players.length >= 2) {
        socket.emit('full');
        return;
    }
    console.log('a user connected', socket.id);
    const playerIndex = players.push(socket.id) - 1;
    const playerRole = playerIndex === 0 ? 'Player 1' : 'Player 2';
    socket.emit('assignRole', playerRole);
    if (players.length === 2) {
        io.emit('startGame', { ball, player1Score, player2Score });
    }
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
        players = players.filter(id => id !== socket.id);
        io.emit('playerDisconnected');
    });
    socket.on('move', (data) => {
        if (playerRole === 'Player 1') {
            playerPositions.player1Y = data.y;
        } else {
            playerPositions.player2Y = data.y;
        }
        socket.broadcast.emit('move', { player: playerRole, y: data.y });
    });
});
function resetBall() {
    ball.x = 400;
    ball.y = 300;
    ball.speedX = -ball.speedX;
    ball.speedY = 4;
}
function updateBallPosition() {
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    if (ball.y <= 0 || ball.y >= 600) ball.speedY = -ball.speedY;
    // Check collision with player 1's paddle
    if (ball.x <= 10 && ball.y >= playerPositions.player1Y && ball.y <= playerPositions.player1Y + 100) {
        ball.speedX = -ball.speedX;
    }
    // Check collision with player 2's paddle
    if (ball.x >= 790 && ball.y >= playerPositions.player2Y && ball.y <= playerPositions.player2Y + 100) {
        ball.speedX = -ball.speedX;
    }
    if (ball.x <= 0) {
        player2Score++;
        if (player2Score === WINNING_SCORE) {
            io.emit('gameOver', { winner: 'Player 2' });
            player1Score = 0;
            player2Score = 0;
        }
        resetBall();
    }
    if (ball.x >= 800) {
        player1Score++;
        if (player1Score === WINNING_SCORE) {
            io.emit('gameOver', { winner: 'Player 1' });
            player1Score = 0;
            player2Score = 0;
        }
        resetBall();
    }
    io.emit('ballUpdate', { ball, player1Score, player2Score });
}
setInterval(updateBallPosition, 1000 / 60);
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});