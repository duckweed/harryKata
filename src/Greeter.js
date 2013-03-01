myapp = {};

myapp.BookStore = function () {
};

const DISC_FOR_OFFSET = [null, 0, 0.05, 0.10, 0.20, 0.25];

myapp.BookStore.prototype.buyBooks = function (numbers) {
    return 8 * numbers.length * (1 - DISC_FOR_OFFSET[numbers.length]);
};

