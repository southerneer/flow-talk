function onlyWorksOnNumbers(foo, bar) {
  return foo * 10;
}

var thisWorks = onlyWorksOnNumbers(10)
var thisDoesnt = onlyWorksOnNumbers('hello')

console.log(thisWorks)
console.log(thisDoesnt)
