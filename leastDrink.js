module.exports = function(day, drink){

  var least = 100;
  if(drink === "coffee"){
    var person = "l";
    day.forEach(function(person){
      if(person.coffee < least){
        least = person.coffee;
        person = "Lesego";
      }
    });
  }
  if(drink === "tea"){
    day.forEach(function(person){
      if(person.tea < least){
        least = person.tea;
        person = person.person;
      }
    });
  }
  if(drink === "water"){
    day.forEach(function(person){
      least = person.water;
      if(person.water < least){
        person = person.person;
      }
    });
  }

  return person;

}
