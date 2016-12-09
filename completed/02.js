// @flow

function foo(x: string, y: number): number {
  return x.length * y;
}

var x = foo('Hello', 42);
console.log(x);
