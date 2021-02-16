const Storage = require("../store")

class Car {

    storage;

    constructor() {
        this.storage = new Storage();
    };
};

let carController = new Car();

module.exports = carController;