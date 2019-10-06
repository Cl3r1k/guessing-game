class GuessingGame {

    constructor() {
        this.range = [];
        this.searchIndex;
    }

    setRange(min, max) {
        this.range[0] = min;
        this.range[1] = max;
        this.searchIndex = 0;
    }

    guess() {
        this.searchIndex = Math.ceil((this.range[0] + this.range[1]) / 2);
        return this.searchIndex;
    }

    lower() {
        this.range[1] = this.searchIndex;
    }

    greater() {
        this.range[0] = this.searchIndex;
    }
}

module.exports = GuessingGame;