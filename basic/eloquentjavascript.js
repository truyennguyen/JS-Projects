//Use reduce & concat function to flatten an array
var arrays = [[1, 2, 3], [4, 5], [6]];

var newSingleArrays = arrays.reduce(function(a, b){
	return a.concat(b);
});

console.log(newSingleArrays);

//Compute the average age difference between mothers and children
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var hasKnownMother = ancestry.filter(function(person){
	return person.mother in byName;
});

console.log(average(map(hasKnownMother, function(person){
	return person.born - byName[person.mother].born;
})));

//Write two functions, every and some, that behave like these 
//methods, except that they take the array as their first 
//argument rather than being a method
function every(arr, predicate){
  for (var i = 0; i < arr.length; i++){
  	if(!predicate(arr[i]))
      return false;
  }
  return true;
}

function some(arr, predicate){
  for(var i = 0; i < arr.length; i++){
  	if(predicate(arr[i]))
      return true;
  }
  return false;
}
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

//Compute and output the average age of the people 
//in the ancestry data set per century

