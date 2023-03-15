/* ______________________ PART 1 ______________________
Object Mutation
*/

/*
1.1
Change let to const below and mutate the array instead of reassigning it to acheive the same goal

Testing:
- assert that (toppings1) evaluates to (['tomato', 'lettuce'])
*/

const toppings1 = ['pickles', 'onions'];
toppings1.pop()
toppings1.pop()
toppings1.push('tomato', 'lettuce')


console.log(toppings1);

trackProgress('1.1');

/*
1.2
No one wants cabbage on their pizza!
Find a way to prevent toppings2 from being mutated.

Testing:
- assert that (toppings2) evaluates to (['mushrooms', 'grilled onions'])
- assert that attempting to push to toppings2 throws an error (you can comment the line out to move forward)
*/

const toppings2 = ['mushrooms', 'grilled onions'];

Object.freeze(toppings2);

//toppings2.push('cabbage');

trackProgress('1.2');

/*
1.3
No one wants a rock for a bun!
Find a way to prevent hamburger1 from being mutated.

Testing:
- assert that (hamburger1.bun) evaluates to ('sesame')
*/

const hamburger1 = { bun: 'sesame', patty: 'black bean' };
Object.freeze(hamburger1);
hamburger1.bun = 'a rock';


trackProgress('1.3');

/* ______________________ PART 2 ______________________
Arrow Functions
*/

/*
2.1
Rewrite the function below as a concise arrow function. Assign the function to a constant named makeBurger1

Testing:
- assert that (makeBurger1()) evaluates to (["sesame", "black bean", "lettuce"])
*/

const makeBurger1 = () => ["sesame", "black bean", "lettuce"];


console.log(makeBurger1());

trackProgress('2.1');

/*
2.2
Rewrite the function below as a concise arrow function. Assign the function to a constant named makeBurger2

Testing:
- Write your own tests!
*/

const makeBurger2 = (bun, patty, toppings) => [bun, patty, ...toppings];

console.log(makeBurger2('wheat', 'turkey',['pickles', 'ketchup']));

trackProgress('2.2');

/* ______________________ PART 3 ______________________
Default Parameters
*/

/*
3.1
If a customer doesn't specify a bun type, let's give them a lettuce wrap.
- Add 'lettuce wrap' as the default for the bun param.

Testing:
- Write your own tests!

Hint:
- You might need to shift the parameters around to accomodate the default.
- Explain to your teammate why this is necessary
*/

const makeBurger3 = (patty, toppings, bun = 'lettuce wrap') => [patty, ...toppings, bun]


console.log(makeBurger3('turkey', ['mustard', 'lettuce','tomato']));

trackProgress('3.1');

/*
3.2
Write an arrow function for making a burger that:
- takes in parameters for bun, patty, and toppings (an array)
- returns a description of the burger in the format: 
      "<patty type> burger on a <bun type> bun with topping1, topping2, etc".
- has reasonable defaults for all three values

Assign the function to a constant named makeBurger4.

Testing:
- assert that (makeBurger4('brioche', 'veggie', ['avocado', 'fried egg'])) evaluates to ('veggie burger on a brioche bun with avocado, fried egg')
- assert that (makeBurger4('brioche', 'veggie')) evaluates to ('veggie burger on a brioche bun with <default toppings>')
- assert that (makeBurger4('brioche')) evaluates to (<default burger type> burger on a brioche bun with <default toppings>)
- assert that (makeBurger4()) evaluates to (<default burger type> burger on a <default bun> bun with <default toppings>)
*/

const makeBurger4 = (bun = "sesame seed", patty = "beef", toppings = ["lettuce", "pickles", "onion"]) => {
  return `You made a ${patty} burger on a ${bun} bun. It is topped with ${toppingsFormatted}.`
}



const toppingsFormatted = (toppings) => {
  if toppings.length <= 1 return toppings
  
  const formattedToppingsWith3OrMoreElements = toppings.map((element, iter) => {
    if (iter === toppings.length-1) {
      return "and " + element
    }
    console.log("element: ", element, "iter:", iter)
    return element;
  })

  return formattedToppingsWith3OrMoreElements;
  
 trackProgress('3.2');

/* ______________________ STOP HERE ______________________
Below this is a bunch of stuff you don't need to worry about yet!
*/
function trackProgress(exercise) {
  console.log(
    '❓ Done with exercise ' + exercise + '! Check your own work!❓\n\n'
  );
}