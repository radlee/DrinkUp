var assert = require('assert');
var howMuch = require('../howMuch');
var leastDrink = require('../leastDrink');
var mostDrink = require('../mostDrink');


var Monday = [
   {
       "person": "Mdu",
       "coffee": 5,
       "tea": 0,
       "water": 3
   },
   {
       "person": "Brenda",
       "coffee": 1,
       "tea": 3,
       "water": 1
   },
   {
       "person": "Lesego",
       "coffee": 0,
       "tea": 4,
       "water": 2
   }
];

var Tuesday = [
   {
       "person": "Lesego",
       "tea": 3,
       "water": 1,
       "coffee": 1
   },
   {
       "person": "Mdu",
       "tea": 0,
       "water": 5,
       "coffee": 7
   },
   {
       "person": "Brenda",
       "tea": 4,
       "water": 0,
       "coffee": 2
   }
];

var Wednesday = [
   {
       "person": "Brenda",
       "water": 4,
       "coffee": 3,
       "tea": 2
   },
   {
       "person": "Lesego",
       "water": 4,
       "coffee": 0,
       "tea": 3
   },
   {
       "person": "Mdu",
       "water": 9,
       "coffee": 8,
       "tea": 2
   }
];

describe('How Much--->', function(){
  it('should return number of Coffees drunk on Monday', function(){
    assert.equal(howMuch(Monday, "coffee"), 6);
  });
  it('should return number of Teas drunk on Tuesday', function(){
    assert.equal(howMuch(Tuesday, "tea"), 7);
  });
  it('should return number of Waters on Wednesday', function(){
    assert.equal(howMuch(Wednesday, "water"), 17);
  });
});
//-----------------------------------[ Who ]---------------------------------
describe('Who--->', function(){
  it('should return the person who drank the least amount of Coffee on Monday', function(){
    assert.equal(leastDrink(Monday, 'coffee'), "Lesego");
  });
  it('should return the person who drank the most amount of Tea on Tuesday', function(){
    assert.equal(mostDrink(Tuesday, 'tea'), "Brenda");
  });
  it('should return the person who drank the least amount of Water on Wednesday', function(){
    assert.equal(leastDrink(Wednesday, 'water'), "Brenda");
  });
});
