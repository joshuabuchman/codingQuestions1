// Mix Potions
// Write a function mixPotions that accepts one argument, an array of potion objects, and returns the
// potion that is produced when they are mixed.
// A potion is represented in the following format:
// {
// volume: x,
// ingredients: { ingredient1: a, ingredient2: b, ingredientA: c }
// }
// Where x is a positive number representing the volume of the potion and a, b, and c are positive numbers
// representing the concentrations of the corresponding ingredients in the potion.
// In the above example, the potion has three different ingredients, but a potion can have any number of
// different ingredients. The function should accept any positive number of potions. Each potion can have
// any non-negative number of different ingredients.
// After mixing, the resulting potion should have a volume equal to the sum of the volumes of the input
// potions. Also, the resulting potion should have volume-weighted concentrations of each ingredient in
// the input potions.
// Example:
// mixPotions([
//  {volume: 100,
//  ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }},
//  {volume: 300,
//  ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }},
// ])
// The above should return:
// { volume: 400,
//  ingredients: { ingredient1: 125, ingredient2: 5, ingredientA: 350,
// ingredientB: 712.5 } }
// The result's volume is 400 because 100 + 300 = 400.
// The result's concentration of ingredient1 is 125. We can determine this because first potion has 50 units
// of concentration in 100 units of volume and the second potion has 150 units of concentration in 300
// units of volume, and (50*100 + 150*300)/(100 + 300) = 125.
// Only one of the potions has any of ingredient2, Using the same math, but with 0 for the concentration of
// ingredient2 in the second potion, we get (20*100 + 0*300)/(100 + 300) = 5.

const mixPotions = (potions) =>
{
  let mixedPotions = potions.reduce((acc, cur, idx) =>
  {
    acc.volume ? acc.volume += cur.volume : acc.volume = cur.volume
    if(acc.ingredients)
    {
      Object.entries(cur.ingredients).forEach(ing => 
      {
        acc.ingredients[ing[0]] ? acc.ingredients[ing[0]] += ing[1]*cur.volume : acc.ingredients[ing[0]] = ing[1]*cur.volume
      })
      if(idx===potions.length-1) for(ing2 in acc.ingredients) acc.ingredients[ing2]/=acc.volume
    }
    else
    {
      acc.ingredients = Object.entries(cur.ingredients).reduce((acc2,cur2) => 
      {
        acc2[cur2[0]] ? acc2[cur2[0]] += cur2[1]*cur.volume : acc2[cur2[0]] = cur2[1]*cur.volume
        return acc2
      }, {})
    }
    return acc
  }, {})
  return mixedPotions
}
console.log(mixPotions([
 {volume: 100,
 ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }},
 {volume: 300,
 ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }},
]))