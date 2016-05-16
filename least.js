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

var leastFunc= function(day, drink){
  var person = "";
  var least = 100;
  if(drink === "coffee"){
    console.log("...");
    day.forEach(function(person){
      console.log("***");
      if (person.coffee < least){
        console.log("&&&");
        least = person.coffee;
        person = person.person;
        console.log(person);
      }

    });

  }
  return person

  //
  // if(drink === "tea"){
  //   day.forEach(function(person){
  //     if(person.tea < least){
  //       least = person.tea;
  //       person = person.person;
  //     }
  //   });
  // }
  // if(drink === "water"){
  //   day.forEach(function(person){
  //     least = person.water;
  //     if(person.water < least){
  //       person = person.person;
  //     }
  //   });
  // }
  // console.log(person)
  // return person
}



console.log("=> " + leastFunc(Monday, 'coffee'));
