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
       "water":9,
       "coffee": 3,
       "tea": 2
   },
   {
       "person": "Lesego",
       "water": 91,
       "coffee": 0,
       "tea": 3
   },
   {
       "person": "Mdu",
       "water": 18,
       "coffee": 8,
       "tea": 2
   }
];

var drinksMost = function(day, drink){
  var listOfPersonObjects = [];
  day.map(function(person){
    if(drink === "coffee"){
      var result = {
        personName : person.person,
        hisDrink : person.coffee
      }
      listOfPersonObjects.push(result);
    }
  })
  var sortTheArray = function(list){
    list.sort(function(obj1, obj2){
      return obj1.hisDrink - obj2.hisDrink;
    })
  }
  sortTheArray(listOfPersonObjects);
  console.log(listOfPersonObjects);
  // console.log(listOfPersonObjects[0].personName)
  console.log(listOfPersonObjects[listOfPersonObjects.length -1].personName);
}
drinksMost(Monday, 'coffee');
