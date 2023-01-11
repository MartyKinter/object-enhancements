function createInstructor(firstName, lastName){
    return {
      firstName, lastName
    }
  }
//
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
  [favoriteNumber] : "That is my favorite!"
}

//instructor[favoriteNumber] = "That is my favorite!"
//
var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }
  //
  function createAnimal(species, verb, noise){
    let animal = {
        species, 
        [verb]() {
            return noise;
        }
     };
}