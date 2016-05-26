module.exports = function(day, drink){
  var listOfPersonObjects = [];
  day.map(function(person){
    if(drink === "tea"){
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
    //Else if-->
  })
  return listOfPersonObjects[listOfPersonObjects.length -1].personName;
}
