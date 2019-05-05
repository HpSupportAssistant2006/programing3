class Lava extends LivingCreatures{
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
    
    atackPoint() {
        this.timer++;
        var newCell = random(this.chooseCell(4))
        if (this.timer >= 10 && newCell != undefined) {
            if (newCell[0] >= 0 && newCell[0] < matrix[0].length && newCell[1] >= 0 && newCell[1] < matrix[0].length) {
                matrix[newCell[1]][newCell[0]] = this.index;
                var lava = new Lava(newCell[0], newCell[1], this.index);
                lavaArr.push(lava);
            }
        }
    }
}