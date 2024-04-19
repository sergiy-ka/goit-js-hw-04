/**
 * Check container capacity
 * @param {object} products - object with products and their quantity
 * @param {number} containerSize - the size of the container
 * @returns {boolean} true if the total quantity of products is less than or equal to the container size, otherwise false
 */
function isEnoughCapacity(products, containerSize) {
  let total = 0;
  for (let key in products) {
    total += products[key];
  }
  return total <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
