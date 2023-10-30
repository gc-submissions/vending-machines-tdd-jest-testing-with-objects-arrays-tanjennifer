const {
  calculateChange,
  isSufficientPayment,
  addItem, removeItem,
  calculateTotal,
} = require("../src/js/cart-functions");



describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1.", () => {
    expect(calculateChange(5, 6)).toBe(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73.", () => {
    expect(calculateChange(12.3, 13.03)).toBe(0.73); //need to round
  });
  test("Given total 500 and payment 600, it returns 100.", () => {
    expect(calculateChange(500, 600)).toBe(100);
  });
});



describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true.", () => {
    expect(isSufficientPayment(5, 6)).toBe(true);
  });
  test("Given total 10 and payment 7, it returns false.", () => {
    expect(isSufficientPayment(10, 7)).toBe(false);
  });
  test("Given total 3 and payment 3, it returns true.", () => {
    expect(isSufficientPayment(3, 3)).toBe(true);
  });
  test("Given total 9 and payment 22, it returns true.", () => {
    expect(isSufficientPayment(9, 22)).toBe(true);
  });
});



// describe("calculateTotal", () => {
//   test("Given an itemsArray of one item with price 4.99, it returns 4.99.", ()=>{
//     const itemsArray = [{name: "Boba", price: 4.99}]

//       expect(calculateTotal(itemsArray)).toEqual(4.99);
//   });
//   test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52.", ()=>{
//     const itemsArray = [
//       { name: "Candy", price: 3.50 },
//       { name: "Poke", price: 12.99 },
//       { name: "Rock", price: 0.03 },

//     ];

//     expect(calculateTotal(itemsArray)).toEqual(16.52);
//   });
//   test("Given an empty itemsArray, it returns 0", ()=>{
//     const itemsArray = [];

//     expect(calculateTotal(itemsArray)).toEqual(0);
//   });
//   // test("Add one more test case with items that you choose.", ()=>{

//   // });
// });




// This function has three parameters:
// itemsArray (an array of objects)
// name (a string)
// price (a number)
describe("addItem", () => {
  test('Call addItem with an empty itemsArray, name "Beans" and price 3.', () => {
    // Arrange
    const itemsArray = [];
    const name = "Beans";
    const price = 3;
    // Act
    addItem(itemsArray, name, price);
    // Assert
    expect(itemsArray).toEqual([{ name: "Beans", price: 3 }]);
  });
  test(`Create an itemsArray with one item in it: { name: "Beans", price: 3 },
  Call addItem with itemsArray, name "Sugar" and price 2.`, ()=>{
    // Arrange: has one obj already inside
    const itemsArray = [{ name: "Beans", price: 3 }];

    const name = "Sugar";
    const price = 2;
    // Act: call addItem
    addItem(itemsArray, name, price);
    // Assert: now array has 2 items
    expect(itemsArray).toEqual([{name: "Beans", price: 3},{name: "Sugar", price: 2}]);
  });
  test(`Add another test starting with an array of three items.`, ()=>{
    // Arrange: 2 obj
    const itemsArray = [
      {name: "Beans", price: 3 },
      {name: "Sugar", price: 2},
  ];

    const name = "Boba";
    const price = 7;
    // Act: call addItem
    addItem(itemsArray, name, price)
    // Assert: 3 items
    expect(itemsArray).toEqual([{name: "Beans", price: 3},{name: "Sugar", price: 2}, {name: "Boba", price: 7}]);
  });
});




describe("removeItem", () => {

  test(`Remove the first element from an array of three items.`, ()=>{
   const itemsArray = [
    //Arrange: 3 items
    {name: "Beans", price: 3},
    {name: "Sugar", price: 2}, 
    {name: "Boba", price: 7},
  ];
    // Act: remove 1st elem from array of 3 items
   removeItem(itemsArray, 0);
    // Assert: itemsArray should have 2 items after 1st elem removed
      expect(itemsArray).toEqual([{name: "Sugar", price: 2}, {name: "Boba", price: 7}])
  });

  test(`Remove the last element from an array of three items.`, ()=>{
    const itemsArray = [
      {name: "Beans", price: 3},
      {name: "Sugar", price: 2}, 
      {name: "Boba", price: 7},
    ];
    removeItem(itemsArray, 2);
    expect(itemsArray).toEqual([{name: "Beans", price: 3}, {name: "Sugar", price: 2},])
  });

  test(`Remove the middle element from an array of three items.`, ()=>{
    const itemsArray = [
      {name: "Beans", price: 3},
      {name: "Sugar", price: 2}, 
      {name: "Boba", price: 7},
    ];
    removeItem(itemsArray, 1);
    expect(itemsArray).toEqual([{name: "Beans", price: 3}, {name: "Boba", price: 7},])

  });

  test(`Remove the only element from an array of one item.`, ()=>{
    const itemsArray = [{name: "Boba", price: 7}];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([]);
  });
});