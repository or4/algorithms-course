/* eslint-disable */
let obj;

console.log('case 1');
obj = {
  foo: function () {
    console.log('foo', this); // return obj
  }
}
obj.foo();


console.log('case 2');
obj = function() { } as any
obj.foo = function () {
  console.log('foo', this);
}
obj.foo(); // return obj, than function


console.log('case 3');
obj = function() { } as any
obj.foo = () => {
  console.log('foo', this);
}
obj.foo(); // return window/undefined, because arrow function has no context


console.log('case 4');
obj = {
  foo: function() {
    const fn = function() {
      console.log('inner callback', this);
    }
    fn(); // has no context!
  }
};
obj.foo();

console.log('case 5');
obj = {
  a: 1,
  foo: function(fn: any) {
    fn(); // has no context
  }
};
obj.foo(function() {
  console.log('callback', this);
});


console.log('case 6');
var arr = [1, 2, 3, 4] as any;
(Array.prototype as any).myCustomFunc = function() {
 console.log(this);
};
arr.myCustomFunc(); // return arr, because there are myCustomFunc.bind(arr ..)

console.log('case 7');
arr = [1, 2, 3, 4];
arr.forEach(function() {
 console.log(this);
}); // return window, because there is no context

console.log('case 8');
arr = [1, 2, 3, 4];
arr.forEach(function() {
 console.log(this);
}, arr); // return arr, because there is context


console.log('case 9');
obj = {
  a: 2,
  b: this.a * 2 // this is global
 };
 console.log( obj.b ); // NaN

 console.log('case 10');
 var myObj = {
  a: 2,
  b: this.myObj.a * 2 // now myObj is undefined...
 };

export const result = 'done';