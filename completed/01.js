// @flow

function onlyWorksOnNumbers(foo: number, bar: string): string {
  return foo * 10 + bar;
}

var doesThisWork = onlyWorksOnNumbers(10, '20')
var howAboutThis = onlyWorksOnNumbers(15, 'hello')
console.log(doesThisWork)
console.log(howAboutThis)
