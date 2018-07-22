/**
 * A closure is a pair consisting of the function code and
 * the environment in which the function is created.
 */

/**
  * Upward funarg problem corresponds to the complexity of returning
  * an inner function to the outside (upward) — i.e.
  * how can we implement the returning of the function
  * if this function uses free variables of the parent environment in which it’s created?
  */
(function (x) {
  return function (y) {
    return x + y;
  };
})(10)(20); // 30

/**
 * Downward funarg problem corresponds to the ambiguity of the variable name resolution
 * when we pass a function which uses free variables as an argument to another function.
 * In which scope these free variables should be resolved —
 * in the scope of the function definition or in the scope of the function execution?
 */

let x = 10;

(function (funArg) {

  let x = 20; // eslint clever, advise that not used
  funArg(); // 10, not 20 // of course not used, because it is called without context.

})(function () { // create and pass a funarg
  console.log(x);
});