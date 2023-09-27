const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // Create a new array based on the original array and the new cat
  return [...cats, name];
}

function prependCat(name) {
  // Create a new array with the new cat followed by the original array
  return [name, ...cats];
}

function removeLastCat() {
  // Create a new array that excludes the last cat from the original array
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  // Create a new array that excludes the first cat from the original array
  return cats.slice(1);
}

// Example usage:
destructivelyAppendCat("Ralph");
destructivelyPrependCat("Bob");
console.log(cats);

const newCats = appendCat("Fluffy");
console.log(newCats);
console.log(cats); // The original cats array remains unchanged.