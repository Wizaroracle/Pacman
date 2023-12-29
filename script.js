var world = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,2,1,1,1,1,1,2,1,1,2,1,1,1,2,4,1,2],
    [6, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1,2,1,1,1,1,1,2,1,2,0,2,1,2,0,2,1,2],
    [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2],
    [2, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1,1,1,2,4,2,1,1,1,2,0,2,1,2,0,2,1,2],
    [2, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1,2],
    [2, 1, 1, 1, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2],
    [2, 1, 1, 1, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2,1,2,2,1,2,1,2,2,2,2,2,1,2,1,1,1,7],
    [2, 1, 1, 1, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2,1,2,2,1,2,1,1,1,2,1,1,1,2,1,2,2,2],
    [2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, , 1, 1, 1, 1,1,2,2,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
    [2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,2,2,1,2,1,2,1,2,1,1,1,2,1,1,4,2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 27,
    y: 5,
    score: 0,
    step: 1,
    direction: 'right',
    health: 3,
    poweredUp: false
};


var ghosts = [
    { id: 1, x: 20, y: 9, state: 'roaming', poweredUp: false },
    { id: 2, x: 22, y: 10, state: 'roaming', poweredUp: false },
    { id: 3, x: 21, y: 9, state: 'roaming', poweredUp: false },
    { id: 4, x: 19, y: 10, state: 'roaming', poweredUp: false }
];

function displayWorld() {
    var output = "";

    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>";

        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) output += "\n\t <div class='bricks'></div>";
            else if (world[i][j] == 1) output += "\n\t <div class='coins'></div>";
            else if (world[i][j] == 0) output += "\n\t <div class='empty'></div>";
            else if (world[i][j] == 3) output += "\n\t <div class='ghost'></div>";
            else if (world[i][j] == 4) output += "\n\t <div class='fruit'></div>";
            else if (world[i][j] == 6) output += "\n\t <div class='empty'></div>";
            else if (world[i][j] == 7) output += "\n\t <div class='empty'></div>";
            else output += "\n\t <div class='empty'></div>";
        }
        output += "\n</div>";
    }

    document.getElementById("world").innerHTML = output;
}

function displayPacman() {
    if (pacman.step == 1) {
        pacman.step = 2;
    } else if (pacman.step == 2) {
        pacman.step = 3;
    } else {
        pacman.step = 1;
    }
    document.getElementById("pacman").style.top = pacman.y * 53 + "px";
    document.getElementById("pacman").style.left = pacman.x * 51 + "px";
   
    if (pacman.poweredUp) {
        document.getElementById("pacman").style.backgroundImage = "url('pacman-art/s/" + pacman.direction + pacman.step + ".png')";
    } else {
       
        document.getElementById("pacman").style.backgroundImage = "url('pacman-art/" + pacman.direction + pacman.step + ".png')";
    }
}
var powerUpDuration = 7777;

function startPowerUp() {
    pacman.poweredUp = true;
    var ghostSound = new Audio("pacman-art/Music/pac-man-ghost-scared-made-with-Voicemod-technology.mp3");

    
    function playGhostSound() {
        ghostSound.currentTime = 0; 
        ghostSound.play();
    }

    
    ghostSound.addEventListener("ended", playGhostSound);

   
    playGhostSound();

  
    setTimeout(function () {
        
        ghostSound.removeEventListener("ended", playGhostSound);
        endPowerUp();
    }, powerUpDuration);
}

var initialGhostPositions = [
    {x: 20, y: 9 },
    { x: 22, y: 10},
    {x: 21, y: 9 },
    {x: 19, y: 10 }
];
function displayGhost(ghost) {
    var ghostElement = document.getElementById("ghost" + ghost.id);
    ghostElement.style.top = ghost.y * 53 + "px";
    ghostElement.style.left = ghost.x * 51 + "px";

    
    if (pacman.poweredUp) {
        ghostElement.style.backgroundImage = "url('pacman-art/ghosts/blue_ghost.gif')"; 
    } else {
        
        var ghostImage = "url('pacman-art/ghosts/" + ghost.id + ".gif')"; 
        ghostElement.style.backgroundImage = ghostImage;
    }
}
function endPowerUp() {
    pacman.poweredUp = false;

    
    for (var i = 0; i < ghosts.length; i++) {
        ghosts[i].poweredUp = false;
        ghosts[i].state = 'roaming';
        ghosts[i].x = initialGhostPositions[i].x; 
        ghosts[i].y = initialGhostPositions[i].y; 
    }

    
    displayAllGhosts();

}

function displayAllGhosts() {
    for (var i = 0; i < ghosts.length; i++) {
        displayGhost(ghosts[i]);
    }
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}



function moveGhost(ghost) {
    var speed = 1;

    if (ghost.state === 'roaming' || ghost.state === 'immobilized') {
        if (ghost.state === 'roaming') {
            var directions = ['up', 'down', 'left', 'right'];
            var randomDirection = directions[Math.floor(Math.random() * directions.length)];

            var nextX = ghost.x;
            var nextY = ghost.y;

            switch (randomDirection) {
                case 'up':
                    if (world[ghost.y - 1][ghost.x] !== 2) {
                        nextY -= speed;
                    }
                    break;
                case 'down':
                    if (world[ghost.y + 1][ghost.x] !== 2) {
                        nextY += speed;
                    }
                    break;
                case 'left':
                    if (world[ghost.y][ghost.x - 1] !== 2) {
                        nextX -= speed;
                    }
                    break;
                case 'right':
                    if (world[ghost.y][ghost.x + 1] !== 2) {
                        nextX += speed;
                    }
                    break;
            }

            if (calculateDistance(ghost.x, ghost.y, pacman.x, pacman.y) < 5) {
                if (pacman.poweredUp) {
                    
                    ghost.state = 'immobilized';
                } else {
                    ghost.state = 'chasing';
                }
            }
        }

        if (ghost.state === 'immobilized') {
            
        }
    } else if (ghost.state === 'chasing') {
        var dx = pacman.x - ghost.x;
        var dy = pacman.y - ghost.y;

        var direction = '';

        if (Math.abs(dx) > Math.abs(dy)) {
            direction = (dx > 0) ? 'right' : 'left';
        } else {
            direction = (dy > 0) ? 'down' : 'up';
        }

        var nextX = ghost.x;
        var nextY = ghost.y;

        switch (direction) {
            case 'up':
                if (world[ghost.y - 1][ghost.x] !== 2) {
                    nextY -= speed;
                }
                break;
            case 'down':
                if (world[ghost.y + 1][ghost.x] !== 2) {
                    nextY += speed;
                }
                break;
            case 'left':
                if (world[ghost.y][ghost.x - 1] !== 2) {
                    nextX -= speed;
                }
                break;
            case 'right':
                if (world[ghost.y][ghost.x + 1] !== 2) {
                    nextX += speed;
                }
                break;
        }

        if (calculateDistance(ghost.x, ghost.y, pacman.x, pacman.y) >= 8) {
            ghost.state = 'roaming';
        }
    }

    if (nextX === pacman.x && nextY === pacman.y) {
         if (!pacman.poweredUp) {
            pacman.health--;
            var loseLifeSound = new Audio("pacman-art/Music/8d82b5_Pacman_Dies_Sound_Effect.mp3");

            if (pacman.health > 0) {
                pacman.x = 27;
                pacman.y = 5;
              

               
                loseLifeSound.currentTime = 0; 
                loseLifeSound.play();

               
                gamePaused = true;

                
                loseLifeSound.addEventListener("ended", function () {
                    
                    gamePaused = false;
                    for (var i = 0; i < ghosts.length; i++) {
                        ghosts[i].x = initialGhostPositions[i].x;
                        ghosts[i].y = initialGhostPositions[i].y;
                    }
                    
                
                    
                    updatePacmanLives();

                   
                    loseLifeSound.removeEventListener("ended", arguments.callee);
                });
            } else {
                
                window.location.href = 'index.html';
            }
        }
    }


    ghost.x = nextX;
    ghost.y = nextY;
}


function checkGhostCollision() {
    for (var i = 0; i < ghosts.length; i++) {
        if (calculateDistance(pacman.x, pacman.y, ghosts[i].x, ghosts[i].y) < 1) {
            if (pacman.poweredUp) {
                
                ghosts[i].state = 'immobilized';
            } else {
                
                pacman.health--;
                if (pacman.health > 0) {
                    pacman.x = 27;
                    pacman.y = 5;
                } else {
                    
                }
            }
        }
    }
}
function moveAllGhosts() {
    for (var i = 0; i < ghosts.length; i++) {
        moveGhost(ghosts[i]);

        
        for (var j = 0; j < ghosts.length; j++) {
            if (i !== j) {
                if (calculateDistance(ghosts[i].x, ghosts[i].y, ghosts[j].x, ghosts[j].y) < 1) {
                    
                    ghosts[i].state = 'roaming'; 
                    break; 
                }
            }
        }

        
        checkGhostCollision();
    }
}



var coinSound = new Audio("pacman-art/Music/pac-man-ghost-touched-made-with-Voicemod-technology.mp3");

function updateScore() {
    if (world[pacman.y][pacman.x] == 1) {
        pacman.score++;
        world[pacman.y][pacman.x] = 0;
        displayWorld();

        
        coinSound.currentTime = 0; 
        coinSound.play();
    }

    document.getElementById("score").innerHTML = "" + pacman.score;
}



function updatePacmanLives() {
   
    for (var i = 1; i <= 3; i++) {
        var lifeElement = document.querySelector('.life' + i);

       
        if (i <= pacman.health) {
            lifeElement.style.display = 'block';
        } else {
            lifeElement.style.display = 'none';
        }
    }
    
}




var startSound = new Audio("pacman-art/Music/8d82b5_Pacman_Opening_Song_Sound_Effect.mp3");
var gameContainer = document.getElementById("gameContainer");
var gamePaused = true;

document.getElementById("startButton").addEventListener("click", function () {
   
    startSound.play();

    
    startSound.addEventListener("ended", function () {
        gamePaused = false; 
        gameContainer.focus(); 
    });

   
    this.style.display = "none";
});

function updateGame() {
    if (!gamePaused) {
        
        displayWorld();
        displayPacman();
        displayAllGhosts();
        updateScore();
        updatePacmanLives();
    }
}


setInterval(updateGame, 100);
setInterval(moveAllGhosts, 200);


document.onkeydown = function (e) {
    if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
        pacman.direction = 'down';
        pacman.y++;
    } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
        pacman.direction = 'up';
        pacman.y--;
    } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
        pacman.direction = 'right';
        pacman.x++;
    } else if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
        pacman.direction = 'left';
        pacman.x--;
    }
    if (world[pacman.y][pacman.x] == 4) { 
        startPowerUp();
        world[pacman.y][pacman.x] = 0; 
        displayWorld();
    }
    
    
    if (world[pacman.y][pacman.x] == 6) { 
       
        pacman.x =39;
        pacman.y=11;
        displayWorld(); 
    }
    if (world[pacman.y][pacman.x] == 7) { 
       
        pacman.x =1;
        pacman.y=5;
        displayWorld(); 
    }


    updateScore();
    displayPacman();
};