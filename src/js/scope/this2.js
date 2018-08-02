/*
  1. An empty object is created.
  2. The newly created object is bound as ‘this’ to the function call.
  3. The newly created object is prototypically linked to function’s prototype object.
  4. The function is executed normally and at the end the newly created object is returned*.
*/


console.log('case 1');
function Foo(id: any, name: any) {
  this.id = id;
  this.name = name;
}
Foo.prototype.print = function() {
  console.log(this.id, this.name);
};
let a = new Foo(1, 'A');
let b = new Foo(2, 'B');
a.print();
b.print();


console.log('case 2');
function Foo2(id: any, name: any) {
  this.id = id;
  this.name = name;
  console.log(this);
  return {}; // or any object
}
Foo2.prototype.print = function() {
  console.log(this.id, this.name);
};
a = new Foo2(1, 'A'); // return {}
a.print();
console.log(a);

// return {}; // Breaks
// return function() {}; // Breaks
// return new Number(3); // Breaks
// return [1, 2, 3]; // Breaks

// return null; // Doesn’t break
// return undefined; // Doesn’t break
// return ‘Hello’; // Doesn’t break
// return 3; // Doesn’t break


console.log('case 3');
function Foo3(id: any, name: any) {
  this.id = id;
  this.name = name;
  console.log(this);
  return Number('null'); // || null || 'string' || true || Number('123')..
}
a = new Foo3(1, 'A'); // return Foo3
console.log(a);


console.log('case 4');
let expenses = {
  data: [1, 2, 3, 4, 5],
  total: function(earnings: any) {
    return this.data.reduce((prev, cur) => prev + cur) - (earnings || 0);
  }
};
console.log(expenses.total(4));



export const result = 'done';
