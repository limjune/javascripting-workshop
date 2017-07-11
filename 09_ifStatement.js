/*
 * Conditional statements are used to alter the control flow of a program,
 * based on a specified boolean condition.
 */

var fruit = 'orange';
var fruit_stringLength = fruit.length;

if(fruit_stringLength > 5){
  console.log('The fruit name has more than five characters.');
}else{
  console.log('The fruit name has five characters or less.');
}
