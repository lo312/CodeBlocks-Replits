/* ______________________ PART 1 ______________________
Array Operations
*/

/*
1.1
We want to add a final ingredient to our smoothies, which should show up at the end of the list, but we're accidentally adding it to the beginning!
Can you fix it?

Testing:
- input: (['yogurt', 'strawberries', 'bananas'], 'peanut butter') => expected output: ["yogurt", "strawberries", "bananas", "peanut butter"]
*/

let ingredients = (['yogurt', 'strawberries', 'bananas'], 'peanut butter')
function addLastIngredient(ingredients, finalIngredient) {
  ingredients.push(finalIngredient);
  return ingredients;
}

console.log(addLastIngredient(['yogurt', 'strawberries', 'bananas'], 'peanut butter'));

trackProgress('1.1');

/*
1.2
Yuck, some bad ingredients made it into our smoothies! Can you remove them?

Write a function called removeBadIngredients that takes in an array of ingredients and an ingredientToRemove, and returns an ingredient list without the bad item.

Testing:
- input: (['peaches', 'orange juice', 'tuna fish', 'banana'], 'tuna fish') => expected output: ["peaches", "orange juice", "banana"]
*/



function removeBadIngredients(ingredients, ingredientToRemove) {
  const badIndex = ingredients.indexOf(ingredientToRemove);
  if (badIndex >= 0) {
    ingredients.splice(badIndex, 1);
      return ingredients;

  }

}
console.log(removeBadIngredients(['peaches', 'orange juice', 'tuna fish', 'banana'], 'tuna fish'));

trackProgress('1.2');

/*
1.3
Some of our smoothies have peanut butter in them, but we want to substitute in avocado for folks with nut allergies!

Write a function called makeAllergyFriendlySmoothie, that takes in an ingredients list a boolean called hasNutAllergy
If the ingredients contain peanut butter and the person has a nut allergy, replace peanut butter with avocado.

Testing:
- input: (['kiwi', 'apple juice', 'blackberries'], true) => expected output: ["kiwi", "apple juice", "blackberries"]
- input: (['kiwi', 'apple juice', 'peanut butter', 'blackberries'], false) => expected output: ["kiwi", "apple juice", "peanut butter", "blackberries"]
- input: (['kiwi', 'apple juice', 'peanut butter', 'blackberries'], true) => expected output: ["kiwi", "apple juice", "avocado", "blackberries"]
*/

function makeAllergyFriendlySmoothie (ingredients, hasNutAllergy){
  if (ingredients.includes('peanut butter') && hasNutAllergy {
            const index = ingredients.indexOf('peanut butter');
        ingredients.splice(index, 1, 'avocado');

    
    
  }
  
}

function makeAllergyFriendlySmoothie(ingredients, hasNutAllergy) {
    if (ingredients.includes('peanut butter') && hasNutAllergy) {
        const index = ingredients.indexOf('peanut butter');
        ingredients.splice(index, 1, 'avocado');
    }
  console.log(ingredients);
  return ingredients;

  
// trackProgress('1.3');

/*
1.4
Uh-oh, we ran out of pineapple! Luckily, combining mango and passionfruit works as a decent substitute.

Using the pineappleSubstitute array and the spread operator, write a function called substitutePineapple that takes in an ingredient list and replaces pineapple if it's present.

Testing:
- input: (['orange juice', 'pineapple', 'strawberries']) => expected output: ['orange juice', 'mango', 'passionfruit', 'strawberries']
- input: (['orange juice', 'bananas', 'strawberries']) => expected output: ['orange juice', 'bananas', 'strawberries']

*/

const pineappleSubstitute = ['mango', 'passionfruit'];


  const pineappleSubstitute = ['mango', 'passionfruit'];
function substitutePineapple(ingredient) {
  if (ingredient.includes('pineapple')) {
    const index = ingredient.indexOf('pineapple');
    ingredient.splice(index, 1, pineappleSubstitute[0]+pineappleSubstitute[1])
  }
  console.log(ingredient);
  return ingredient;
}
// trackProgress('1.4');

/* ______________________ PART 2 ______________________
Iterating over Arrays
*/

/*
2.1
Uh-oh, several bad ingredients made it into the smoothies!! Can you remove them ALL?

Given a list of smoothie ingredients, remove any of the bad ingredients that appear anywhere in the smoothie (there might be several!)

Testing:
- input: (['peaches', 'yogurt', 'cheez whiz', 'blackberries']) => expected output: ['peaches', 'yogurt', 'blackberries']
- input: (['cherries', 'ranch dressing', 'orange juice', 'caviar', 'bananas']) => expected output: ['cherries', 'orange juice', 'bananas']
- input: (['mango', 'orange juice', 'pineapple', 'yogurt']) => expected output: ['mango', 'orange juice', 'pineapple', 'yogurt']
*/

const badIngredients = ['tuna fish', 'caviar', 'cheez whiz', 'ranch dressing']


// trackProgress('2.1');

/*
2.2
We're going vegan! We're updating all of our smoothies to be dairy free, replacing any dairy ingredients with oat milk.

Create a function that takes in a list of ingredients and replaces any that match the dairy ingredient list (you can assume that no smoothie will have more than one dairy ingredient)

Testing:
- input: (['strawberries', 'whole milk', 'banana']) => expected output: ['strawberries', 'oat milk', 'banana']
*/

const dairyIngredients = ['yogurt', 'whole milk', 'ice cream'];

// trackProgress('2.2');

/*
2.3
Building on the last problem, we want to be able to make multiple smoothies vegan at a time.

Given a list of smoothies, replace the dairy in each one

Note:
- You can and should use the function you created above! This is good practice for creating small helper functions.

Testing:
- input: ([['mango', 'kiwi', 'pineapple'], ['strawberries', 'whole milk', 'banana'], ['chocolate', 'honey', 'yogurt', 'protein powder']]) 
     => expected output: [['mango', 'kiwi', 'pineapple'], ['strawberries', 'oat milk', 'banana'], ['chocolate', 'honey', 'oat milk', 'protein powder']]
*/

// trackProgress('2.3');

/* ______________________ STOP HERE ______________________
Below this is a bunch of stuff you don't need to worry about yet!
*/
function isDefined(variableName) {
  try {
    eval(variableName);
    return true;
  } catch (e) {
    if (e.name == 'ReferenceError') {
      return false;
    }
  }
}

function equals(actualValue, expectedValue) {
  if (Array.isArray(expectedValue)) {
    return JSON.stringify(expectedValue) === JSON.stringify(actualValue);
  }
  return actualValue == expectedValue;
}

function assertEquals(actualValue, expectedValue) {
  if (!equals(actualValue, expectedValue)) {
    throw new Error('Expected: ' + expectedValue + ', but got: ' + actualValue);
  }
}

function variableEqualsValue(variableName, expectedValue) {
  if (isDefined(variableName) && equals(eval(variableName), expectedValue)) {
    return true;
  }
  return false;
}

function checkVariable(variableName, expectedValue) {
  var variableValue = eval(variableName);
  if (!variableEqualsValue(variableName, expectedValue)) {
    throw new Error(
      'Expected ' +
      variableName +
      ' to be: ' +
      expectedValue +
      ' but was: ' +
      variableValue
    );
  }
  console.log(variableName + ' equals: ' + variableValue);
}

function isInitializedVariable(variableName) {
  var variableValue = eval(variableName);

  if (!isDefined(variableName) || variableValue == null) {
    throw new Error('Expected ' + variableName + ' to be initialized.');
  }
  console.log(variableName + ' equals: ' + variableValue);
}

function isUninitializedVariable(variableName) {
  if (!variableEqualsValue(variableName, null)) {
    throw new Error(
      'Expected ' + variableName + ' to be declared but uninitialized.'
    );
  }
  console.log(variableName + ' equals: ' + eval(variableName));
}

function trackProgress(exercise) {
  console.log(
    '❓ Done with exercise ' + exercise + '! Check your own work!❓\n\n'
  );
}

function checkAnswer(exercise) {
  switch (exercise) {
    case '1.1':
      checkVariable('', '');
      break;
    case '1.2':
      checkVariable('', '');
      break;
    case '1.3':
      checkVariable('', '');
      break;
    case '1.4':
      checkVariable('', '');
      break;
    case '1.5':
      checkVariable('', '');
      break;
    case '1.6':
      checkVariable('', '');
      break;
    case '1.7':
      checkVariable('', '');
      break;
    case '1.8':
      checkVariable('', '');
      break;
    case '2.1':
      checkVariable('', '');
      break;
    case '2.2':
      checkVariable('', '');
      break;
    case '2.3':
      checkVariable('', '');
      break;
    case '2.4':
      checkVariable('', '');
      break;
    case '2.5':
      checkVariable('', '');
      break;
    case '2.6':
      checkVariable('', '');
      break;
    case '2.7':
      checkVariable('', '');
      break;
    case '2.8':
      checkVariable('', '');
      break;
    case '3.1':
      checkVariable('', '');
      break;
    case '3.2':
      checkVariable('', '');
      break;
    case '3.3':
      checkVariable('', '');
      break;
    case '3.4':
      checkVariable('', '');
      break;
    case '3.5':
      checkVariable('', '');
      break;
    case '3.6':
      checkVariable('', '');
      break;
    case '3.7':
      checkVariable('', '');
      break;
    case '3.8':
      checkVariable('', '');
      break;
    case '4.1':
      checkVariable('', '');
      break;
    case '4.2':
      checkVariable('', '');
      break;
    case '4.3':
      checkVariable('', '');
      break;
    case '4.4':
      checkVariable('', '');
      break;
    case '4.5':
      checkVariable('', '');
      break;
    case '4.6':
      checkVariable('', '');
      break;
    case '4.7':
      checkVariable('', '');
      break;
    case '4.8':
      checkVariable('', '');
      break;
    default:
      throw new Error(exercise + ' does not have an answer key.');
  }
  console.log('✅ Passed exercise ' + exercise + '! ✅\n\n');
}
