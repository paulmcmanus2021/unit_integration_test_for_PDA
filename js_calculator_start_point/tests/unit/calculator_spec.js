var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('Can add two numbers', function(){
    calculator.previousTotal = "1"
    calculator.add("4")
    assert.equal(5.0, calculator.runningTotal)
  }),

  it('Can subtract two numbers', function(){
    calculator.previousTotal = "7"
    calculator.subtract("4")
    assert.equal(3.0, calculator.runningTotal)
  }),

  it('Can multiply two numbers', function(){
    calculator.previousTotal = "3"
    calculator.multiply("5")
    assert.equal(15.0, calculator.runningTotal)
  }),

  it('Can divide two numbers', function(){
    calculator.previousTotal = "21"
    calculator.divide("7")
    assert.equal(3.0, calculator.runningTotal)
  }),

  it('Can concatenate multiple number button clicks', function(){
    calculator.numberClick("1")
    calculator.numberClick("1")
    assert.equal(11.0, calculator.runningTotal)
  }),

  it('Can chain multiple operations together (with equals)', function(){
    calculator.numberClick("1")
    calculator.operatorClick("*")
    calculator.numberClick("5")
    calculator.operatorClick("=")
    calculator.operatorClick("+")
    calculator.numberClick("6")
    calculator.operatorClick("=")
    assert.equal(11.0, calculator.runningTotal)
  }),

  it('Can chain multiple operations together (no equals)', function(){
    calculator.numberClick("4")
    calculator.operatorClick("+")
    calculator.numberClick("4")
    calculator.operatorClick("-")
    calculator.numberClick("2")
    calculator.operatorClick("/")
    calculator.numberClick("2")
    calculator.operatorClick("=")
    assert.equal(3.0, calculator.runningTotal)
  }),

  it('Can clear the running total without affecting calculation', function(){
    calculator.numberClick("1")
    calculator.operatorClick("+")
    calculator.numberClick("2")
    calculator.operatorClick("+")
    calculator.clearClick()
    calculator.operatorClick("=")
    assert.equal(3.0, calculator.runningTotal)
  })

});
