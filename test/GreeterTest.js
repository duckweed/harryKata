var bookStore = new myapp.BookStore();

function checkPriceForBooks(msg, expectedPrice, bookList) {
    assertEquals(msg, expectedPrice, bookStore.buyBooks(bookList));
}
TestCase("GreeterTest", {
    "test: one book costs 8 dollars": function () {
        checkPriceForBooks("", 8.0, [0]);
    },
    "test: two different books costs 16 dollars minus %5": function () {
        var expectedPrice = (8.0 * 2) * (1 - 0.05);
        checkPriceForBooks("", expectedPrice, [0, 1]);
    },
    "test: three different books costs 24 dollars minus %10": function () {
        checkPriceForBooks("", (8.0 * 3) * (1 - 0.10), [0, 1, 2]);
    },
    "test: four different books costs 32 dollars minus %20": function () {
        checkPriceForBooks("", (8.0 * 4) * (1 - 0.20), [0, 1, 2, 3]);
    },
    "test: five different books costs 40 dollars minus %25": function () {
        checkPriceForBooks("", (8.0 * 5) * (1 - 0.25), [0, 1, 2, 3, 4]);
    }
});
