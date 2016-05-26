module.exports = function(day, drink){
  var listOfPersonObjects = [];
  day.map(function(person){
    if(drink === "coffee"){
      var result = {
        personName : person.person,
        hisDrink : person.coffee
      }
      listOfPersonObjects.push(result);
      var sortTheArray = function(list){
        list.sort(function(obj1, obj2){
          return obj1.hisDrink - obj2.hisDrink;
        })
      }
      sortTheArray(listOfPersonObjects);
    }
    else if(drink == "water"){
      var result = {
        personName : person.person,
        hisDrink : person.water
      }
      listOfPersonObjects.push(result);
      var sortTheArray = function(list){
        list.sort(function(obj1, obj2){
          return obj1.hisDrink - obj2.hisDrink;
        })
      }
      sortTheArray(listOfPersonObjects);
    }
    else if(drink == "tea"){
      var result = {
        personName : person.person,
        hisDrink : person.tea
      }
      listOfPersonObjects.push(result);
      var sortTheArray = function(list){
        list.sort(function(obj1, obj2){
          return obj1.hisDrink - obj2.hisDrink;
        })
      }
      sortTheArray(listOfPersonObjects);
    }
  });
  return listOfPersonObjects[0].personName;
}
