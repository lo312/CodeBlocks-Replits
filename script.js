/* ______________________ PART 1 ______________________
Mixins
*/

/*
1.1
We have a mobility mixin below that includes a function for running, but we want one for jumping too!
- Within the mixin, set a jump function on the obj parameter. The function should return "higher!"
- Create an instance of Dog named coolDog with the name param of your choice
- Apple the mixin to the coolDog

Testing:
- assert that (coolDog.run()) evaluates to ('go go go!')
- assert that (coolDog.jump()) evaluates to ('higher!')
*/

function Dog(name) {
  this.name = name;
}

let mobilityMixin = function (obj) {
  obj.run = function () {
    return 'go go go!';
  }
  obj.jump = function () {
    return 'higher!';
  }
};

let coolDog = new Dog('Howdy Doody');
mobilityMixin(coolDog);

console.log(coolDog.run());
console.log(coolDog.jump());

trackProgress('1.1');


/*
1.2
Mixins aren't just for instances of objects! You can apply them to prototypes too!
- Create a Sloth constructor (no params needed)
- Following the guidance in this article (https://javascript.info/mixins), create a mixin called sleepMixin that has two functions on it (see tests below for expected behavior) and assign the mixin to the Sloth prototype
- Create two Sloth instances (coolSloth, coolerSloth) and invoke the mixin functions

Testing:
- assert that (coolSloth.sleep()) evaluates to ('zzzzzz')
- assert that (coolSloth.countSheep()) evaluates to ('1, 2, 3...')
- assert that (coolerSloth.sleep()) evaluates to ('zzzzzz')
- assert that (coolerSloth.countSheep()) evaluates to ('1, 2, 3...')
*/

function Sloth() {};

let sleepMixin = {
  sleep() {
    return "zzzzzz"
  },
  countSheep() {
    return "1,2,3..."
  }
}


Object.assign(Sloth.prototype, sleepMixin);
  
// instances
let coolSloth = new Sloth();
let coolerSloth = new Sloth();


//testing
console.log("The cool sloth counts " + coolSloth.countSheep() + " to go " + coolSloth.sleep());
//console.log(coolSloth.countSheep());
console.log(coolerSloth.sleep());
console.log(coolerSloth.countSheep());

trackProgress('1.2');

/* ______________________ PART 2 ______________________
Closure
*/

/*
2.1
We're trying to make a clownfish named Nemo, but the name is getting overridden to 'Flipper'! Let's lock it down and prevent our fish from mutating after they're created.
- Log clownfish.getName() and clownfish.getLocation() and explain to your teammates why it is that.
- Change the scope of the name and location properties to ensure they're only accessible through the "getter" functions
- You can leave the Flipper and Bayou overrides to show that they don't impact the real properties

Testing:
- assert that (clownfish.getName()) evaluates to ('Nemo')
- assert that (clownfish.getLocation()) evaluates to ('Ocean')
*/

function Fish(name, location) {
  let nameProp = name;
  let locationProp = location;
  this.getName = function () {
    return nameProp;
  };
  this.getLocation = function () {
    return locationProp;
  };
}

let clownfish = new Fish('Nemo', 'ocean');
clownfish.nameProp = 'Flipper';
clownfish.locationProp = 'bayou';

console.log(clownfish.getName());
console.log(clownfish.getLocation());

trackProgress('2.1');

/*
2.2
Let's protect our cows!
- Change the scope of the property fields to ensure they can't be changed outside of the constructor
- Add "getter" methods for the properties

Testing:
- assert that (coolCow.getName()) evaluates to ('Bessy')
- assert that (coolCow.getMilkType()) evaluates to ('chocolate')
*/

function Cow(name, milkType) {
  let nameProp = name;
  let milkTypeProp = milkType;
  this.getName = function() {
    return nameProp
  }
  this.getMilkType = function() {
    return milkTypeProp
  }
}

let coolCow = new Cow('Bessy', 'chocolate');

console.log(coolCow.getName());
console.log(coolCow.getMilkType());

trackProgress('2.2');

/* ______________________ PART 3 ______________________
Immediately Invoked Function Expression (IIFE)
*/

/*
3.1
Let's practice IIFE!
- Rewrite the eat function below as an IIFE

Testing:
- assert that (<running the code>) logs ("yum, yum, yum")
*/


(function eat() {
  console.log("yum, yum, yum");
}) ();


trackProgress('3.1');

/*
3.2
Write a IIFE for heckling that just logs "booooooo!"

Testing:
- assert that (<running the code>) logs ("booooooo!")
*/

(function boo() {
  console.log("boooooo");
}) ();

trackProgress('3.2');

/* ______________________ STOP HERE ______________________
Below this is a bunch of stuff you don't need to worry about yet!
*/

function trackProgress(exercise) {
  console.log(
    '❓ Done with exercise ' + exercise + '! Check your own work!❓\n\n'
  );
}