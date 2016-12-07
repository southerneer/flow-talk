// @flo

// who can spot the type error?

function foo(x: string, y: number): string {
  return x.length * y;
}

var x = foo('Hello', 42);
console.log(x);
