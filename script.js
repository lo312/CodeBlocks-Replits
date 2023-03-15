/* ______________________ PART 1 ______________________
Inheritance
*/

/*
1.1
There are three types of Elephants -- African Forest Elephants, African Bush Elephants, & Asian Elephants.

Below, we have an Elephant parent object and child object for the AfricanForestElephant. 
- Create two more child classes to model the remaining Elephant types.
- Create instances of all three child classes, named forestElephant, bushElephant, and asianElephant respectively.

Testing:
- assert that (forestElephant.stomp()) evaluates to ('stomp stomp stomp')
- assert that (bushElephant.stomp()) evaluates to ('stomp stomp stomp')
- assert that (asianElephant.stomp()) evaluates to ('stomp stomp stomp')
*/

function Elephant() {}
Elephant.prototype = {
  constructor: Elephant,
  stomp: function () {
    return 'stomp stomp stomp';
  },
};

function AfricanForestElephant() {}
AfricanForestElephant.prototype = Object.create(Elephant.prototype);
AfricanForestElephant.prototype.constructor = AfricanForestElephant;

let forestElephant = Object.create(Elephant.prototype);
forestElephant.stomp();

function AfricanBushElephants() {}
AfricanBushElephants.prototype = 
Object.create(Elephant.prototype);
AfricanBushElephants.prototype.constructor =
AfricanBushElephants;

let bushElephant =
Object.create(Elephant.prototype);
bushElephant.stomp();

function AsianElephants() {}
AsianElephants.prototype = 
Object.create(Elephant.prototype);
AsianElephants.prototype.constructor =
AsianElephants;

let asianElephant =
Object.create(Elephant.prototype);
asianElephant.stomp();

console.log((forestElephant.stomp()));
console.log((bushElephant.stomp()));
console.log((asianElephant.stomp()));

trackProgress('1.1');

/*
1.2
We're trying to model some birds, but are duplicating code!
- Refactor so that the describeColor function lives in the Bird prototype instead of being duplicated in the child objects
- Create instances of the child objects named blueBird and redBird respectively

Testing:
- assert that (blueBird.describeColor()) evaluates to ("My feathers are blue")
- assert that (redBird.describeColor()) evaluates to ("My feathers are red")
*/

function Bird() { };
  Bird.prototype = {
    constructor: Bird,
    describeColor: function() {
      console.log("My feathers are " + this.color);
    }
  };

function BlueJay() {}
BlueJay.prototype = Object.create(Bird.prototype);
BlueJay.prototype.constructor = BlueJay;
BlueJay.prototype.color = 'blue';

let blueBird = 
Object.create(BlueJay.prototype);
blueBird.describeColor;

function Cardinal() {}
Cardinal.prototype = Object.create(Bird.prototype);
Cardinal.prototype.constructor = Cardinal;
Cardinal.prototype.color = 'red';

let redBird =
Object.create(Cardinal.prototype);
redBird.describeColor;


console.log(blueBird.describeColor());
console.log(redBird.describeColor());


trackProgress('1.2');

/*
1.3
Let's model cats!
- Create child objects that represent house cats and feral cats, both of which are child objects of a cat object.
- Create a HouseCat instance named homeBody and a FeralCat instance named wildBoi
- Add necessary functionality to pass the test cases, with an eye for keeping your code DRY!

Testing:
- assert that (homeBody.wash()) evaluates to ("lick lick lick")
- assert that (wildBoi.wash()) evaluates to ("lick lick lick")
- assert that (homeBody.eat()) evaluates to ("yum yum yum, Meow Mix")
- assert that (wildBoi.eat()) evaluates to ("yum yum yum, dead birds")
*/

function Cat() { }
 Cat.prototype = {
  constructer: Cat,
  wash: function () {
   return "lick, lick, lick";
 }
 };

function HouseCat() {}
HouseCat.prototype = Object.create(Cat.prototype);
HouseCat.prototype.constructor = HouseCat;
HouseCat.prototype.eat = function () {
  return "yum yum yum, Meow Mix";
}

let homeBody =
Object.create(HouseCat.prototype);
homeBody.eat();

function FeralCat() {}
FeralCat.prototype = Object.create(Cat.prototype);
FeralCat.prototype.constructor = FeralCat;
FeralCat.prototype.eat = function () {
  return "yum yum yum, dead birds";
}

let wildBoi =
Object.create(FeralCat.prototype);
wildBoi.eat();


  
console.log(homeBody.wash());
console.log(wildBoi.wash());
console.log(homeBody.eat());
console.log(wildBoi.eat());


trackProgress('1.3');

/* ______________________ PART 2 ______________________
Overriding Parent Methods
*/

/*
2.1
Let's model fish! Most fish aren't dangerous, so let's make that the default and then selectively override some fish as dangerous
- Create a parent object for fish and child objects for goldfish, salmon, and sharks
- Create instances of the child objects named goldy, sammy, and jaws respectively
- Add necessary functionality to pass the test cases, with an eye for keeping your code DRY

Testing:
- assert that (goldy.isDangerous()) evaluates to (false)
- assert that (sammy.isDangerous()) evaluates to (false)
- assert that (jaws.isDangerous()) evaluates to (true)
*/

function Fish() { }
Fish.prototype = {
  constructor: Fish,
  isDangerous: function(){
    return "false"
  }
};

function Goldfish() {}
Goldfish.prototype = Object.create(Fish.prototype);
Goldfish.prototype.constructor = Goldfish;

let goldy = new Goldfish()
goldy.isDangerous();

function Salmon() {}
Salmon.prototype = Object.create(Fish.prototype);
Salmon.prototype.constructor = Salmon;

let sammy = new Salmon()
sammy.isDangerous();

function Sharks() {}
Sharks.prototype = Object.create(Fish.prototype);
Sharks.prototype.constructor = Sharks;
Sharks.prototype.isDangerous = function() {
  return "true"
}

let jaws = new Sharks()
jaws.isDangerous();


console.log(goldy.isDangerous());
console.log(sammy.isDangerous());
console.log(jaws.isDangerous());

trackProgress('2.1');

/* ______________________ PART 3 ______________________
Bonus
*/

/*
3.1
The animals all got loose and running amok! We need to sort them back into their appropriate groups. 
All animals with the same parent object live in the same exhibit.
- Given a list of animals, return an object where the key is the name of the parent exhibit and the value is the name of each of the animals that belong in that exhibit.

Testing:
- assert that (coolAnimals) evaluates to ( { 'Big Cats': ['Tony', 'Shaggy', 'Simba'], 'Snake House': ['Connie', 'Kai'] } )
*/

// Provided for testing. Feel free to make your own test cases!

function BigCat() {}
BigCat.prototype = {
  constructor: BigCat,
  exhibit: 'Big Cats'
};

function Tiger(name) {
  this.name = name;
}
Tiger.prototype = Object.create(BigCat.prototype);
Tiger.prototype.constructor = Tiger;

function Lion(name) {
  this.name = name;
}
Lion.prototype = Object.create(BigCat.prototype);
Lion.prototype.constructor = Lion;

function Cheetah(name) {
  this.name = name;
}
Cheetah.prototype = Object.create(BigCat.prototype);
Cheetah.prototype.constructor = Cheetah;


function Snake() {}
Snake.prototype = {
  constructor: Snake,
  exhibit: 'Snake House'
};

function Cobra(name) {
  this.name = name;
}
Cobra.prototype = Object.create(Snake.prototype);
Cobra.prototype.constructor = Cobra;

function Boa(name) {
  this.name = name;
}
Boa.prototype = Object.create(Snake.prototype);
Boa.prototype.constructor = Boa;

coolAnimals = [new Tiger('Tony'), new Boa('Connie'), new Cheetah('Shaggy'), new Cobra('Kai'), new Lion('Simba')]

console.log(coolAnimals);


for (let animal of coolAnimals) {

  console.log(animal.exhibit);
}
  
  //console.log(animalK)
// let result = {};
// result['Big Cats'] = 
   

/* ______________________ STOP HERE ______________________
Below this is a bunch of stuff you don't need to worry about yet!
*/
function trackProgress(exercise) {
  console.log(
    '❓ Done with exercise ' + exercise + '! Check your own work!❓\n\n'
  );
}