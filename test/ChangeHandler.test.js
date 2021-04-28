const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  // TODO: Add additional tests below...

  //constructor test cases:
  //amountDue is set based on an argument.
  //cashTendered is set to zero.

  test("constructor - amountDue is set based on an argument", () => {
    // Act
    const changeHandler = new ChangeHandler();
    // Assert
    expect(changeHandler.amountDue).toEqual(null);
  });

  test("constructor - cashTendered is set to zero", () => {
    const changeHandler = new ChangeHandler();
    expect(changeHandler.cashTendered).toEqual(0)
  });

  //insertCoin test cases:
  //Inserting a quarter adds 25.
  //Inserting a dime adds 10.
  //Inserting a nickel adds 5.
  //Inserting a penny adds 1.
  //Calling function multiple times continues to add on to the amount.


});