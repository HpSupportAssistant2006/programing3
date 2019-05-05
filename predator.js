class Predator extends LivingCreatures{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewCordinates();
        return super.chooseCell(character);
    }

    move() {
        var newCell = random(this.chooseCell(1));
        if (this.energy <= 0 && newCell) {
            this.energy--;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;
        }
    }

    mul() {
        this.energy++;
        var newCell = random(this.chooseCell(1));
        if (this.energy >= 5 && newCell) {
            var predator = new Predator(newCell[0], newCell[1], this.index)
            predatorArr.push(predator);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy -= 5;
        }
    }

    eat() {
        var newCell = random(this.chooseCell(2));
        if (newCell) {
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == newCell[0] && grassEaterArr[i].y == newCell[1]) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = this.index;
            this.x = newCell[0];
            this.y = newCell[1];
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            for (var i in predatorArr) {
                if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
        }
    }
}