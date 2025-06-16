// Initial array
const cats = ["Milo", "Otis", "Garfield"];

// Destructively appends a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructively prepends a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructively removes the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructively removes the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructively appends a cat to the end of the array
function appendCat(name) {
  return [...cats, name];
}

// Non-destructively prepends a cat to the beginning of the array
function prependCat(name) {
  return [name, ...cats];
}

// Non-destructively removes the last cat from the array
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Non-destructively removes the first cat from the array
function removeFirstCat() {
  return cats.slice(1);
}
