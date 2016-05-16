module.exports = function(day, drink){
  if(drink === "coffee"){
    var totalDrink = 0;
    day.forEach(function(person){
      totalDrink += person.coffee;
    })
    return totalDrink;
  }
  else if(drink === "tea"){
    var totalDrink = 0;
    day.forEach(function(person){
      totalDrink += person.tea;
    })
    return totalDrink;
  }
  else if(drink === "water"){
    var totalDrink = 0;
    day.forEach(function(person){
      totalDrink += person.water;
    })
    return totalDrink;
  }
}
