const Storage = require("../store")

class Car {

    storage;

    constructor() {
        this.storage = new Storage();
    };

    async indexAll() {
        return
    };

    async store() {
        return
    }
    async update() {
        return
    };
    async delete() {
        return
    };
};

let carController = new Car();

module.exports = carController;