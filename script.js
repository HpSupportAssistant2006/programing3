var showCordinates = false;
var matrix = [];
var matSide = 35;
var matrixLength = 0;
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var lavaArr = [];
var waterArr = [];

function setup() {
    matrixLength = 20//random(20);
    text(matrixLength,)
    for (var y = 0; y < matrixLength; y++) {
        matrix[y] = [];
        for (var x = 0; x < matrixLength; x++) {
            matrix[y][x] = Math.round(Math.random()*5);
        }
    }
    frameRate(1)
    createCanvas(matrix[0].length * matSide, matrix.length * matSide, matSide, matSide);
    background("gray");

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y, 1);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                var predator = new Predator(x, y, 3);
                predatorArr.push(predator);
            }
            if (matrix[y][x] == 4) {
                var newLava = new Lava(x, y, 4);
                lavaArr.push(newLava);
            }
            if (matrix[y][x] == 5) {
                var newWater = new Water(x, y, 5);
                waterArr.push(newWater);
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * matSide, y * matSide, matSide, matSide);
            }
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * matSide, y * matSide, matSide, matSide);
            }
            if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * matSide, y * matSide, matSide, matSide);
            }
            if (matrix[y][x] == 3) {
                fill("#FFB81C");
                rect(x * matSide, y * matSide, matSide, matSide);
            }
            if (matrix[y][x] == 4) {
                fill("#cf1020");
                rect(x * matSide, y * matSide, matSide, matSide);
            }
            if (matrix[y][x] == 5) {
                fill("cyan");
                rect(x * matSide, y * matSide, matSide, matSide);
            }

            if(showCordinates == true){
                fill("blue");
                text(x + " " + y, x * matSide + matSide / 4, y * matSide + matSide / 4);
            }

        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
        grassEaterArr[i].die();
    }
    /*for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].mul();
        predatorArr[i].eat();
        predatorArr[i].die();
    }
    for(var i in waterArr){
        waterArr[i].flow();
    }
    for (var i in lavaArr) {
        lavaArr[i].atackPoint();
    }
*/
}