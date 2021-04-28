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
  

  //Calling function multiple times continues to add on to the amount.
  test("insertCoin - Inserting a quarter adds 25" , () => {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin("quarter");
    expect(changeHandler.cashTendered).toEqual(25);
  });
  test("insertCoin nserting a dime adds 10" , () => {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin("dime");
    expect(changeHandler.cashTendered).toEqual(10);
  });
  test("insertCoin - Inserting a nickel adds 5" , () => {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin("nickel");
    expect(changeHandler.cashTendered).toEqual(5);
  });
  test("insertCoin - Inserting a penny adds 1" , () => {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin("penny");
    expect(changeHandler.cashTendered).toEqual(1);
  });

});