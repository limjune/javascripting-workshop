var pets = ['cat', 'dog', 'rat'];
var pets_arrayLength = pets.length;

for(var i=0; i<pets_arrayLength; i++){
  pets[i] = pets[i] + 's';
}
console.log(pets);
