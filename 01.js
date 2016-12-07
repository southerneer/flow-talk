function onlyWorksOnNumbers(foo, bar) {
  return foo * 10 + bar;
}

var doesThisWork = onlyWorksOnNumbers(10, 20);
var howAboutThis = onlyWorksOnNumbers(10, '20');
var andThis = onlyWorksOnNumbers('hello', 'there');

console.log(doesThisWork);
console.log(howAboutThis);
console.log(andThis);
