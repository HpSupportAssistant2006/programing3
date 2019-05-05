class Water extends LivingCreatures{
    constructor(x, y, index) {
        super(x, y, index);
        this.timer = 0;
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

    flow() {
        this.timer++;
        var newCell = random(this.chooseCell(4,5));
        if (this.timer >= 20) {
            if (newCell[0] >= 0 && newCell[0] < matrix[0].length && newCell[1] >= 0 && newCell[1] < matrix[0].length) {
                matrix[newCell[1]][newCell[0]] = this.index;
                matrix[this.y][this.x] = random(3);
                if (matrix[this.y][this.x] == 1) {
                    var grass = new Grass(x, y, 1);
                    grassArr.push(grass);
                }
                if (matrix[this.y][this.x] == 2) {
                    var grassEater = new GrassEater(x, y, 2);
                    grassEaterArr.push(grassEater);
                }
                if (matrix[this.y][this.x] == 3) {
                    var predator = new Predator(x, y, 3);
                    predatorArr.push(predator);
                }
                this.x = newCell[0];
                this.y = newCell[1];
            }
        }
    }
}