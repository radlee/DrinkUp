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
  console.log(listOfPersonObjects[0].personName)
  // console.log(listOfPersonObjects[listOfPersonObjects.length -1].hisDrink);
}
drinksMost(Monday, 'coffee');



    // else if(drink === "water"){
    //   var result = {
    //     personName : person.person,
    //     hisDrink : person.water
    //   }
    //   listOfPersonObjects.push(result);
    // }
    // else if(drink === "tea"){
    //   var result = {
    //     personName : person.person,
    //     hisDrink : person.tea
    //   }
    //   listOfPersonObjects.push(result);
    // }
    // else{
    //   console.log("Wrong Shit!")
    // }



























    //
    // if(drink === "tea"){
    //   console.log("Tea---")
    //   for(var i =0; i < day.length; i++){
    //     if(day[i].tea < least){
    //       least = day[i].tea;
    //       console.log(least)
    //       person.push(day[i].person);
    //     }
    //   }
    // }
    //
    // if(drink === "water"){
    //   console.log("Water---")
    //   for(var i =0; i < day.length; i++){
    //     if(day[i].water < least){
    //       least = day[i].water;
    //       console.log(least)
    //
    //       person.push(day[i].person);
    //     }
    //   }
    // }

    // return person;
