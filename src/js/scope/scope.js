/* eslint-disable */
/**
 * https://stackoverflow.com/questions/40544709/why-variable-object-was-changed-to-lexical-environment-in-es5?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
 * ES5 changed variable object(VO) to lexical environment. What's the motivation of such change since VO is already very obvious as perception?
 */

 // So once again, the main thing which we should understand why it was needed
 // to replace old activation object concept with the declarative environment
 // record is first of all the efficiency of the implementation.

 // Thus, as Brendan Eich also mentioned (the last paragraph) —
 // the activation object implementation in ES3 was just “a bug”:
 // “I will note that there are some real improvements in ES5,
 // in particular to Chapter 10 which now uses declarative binding environments.
 // ES1-3’s abuse of objects for scopes (again I’m to blame for doing so in JS in 1995,
 // economizing on objects needed to implement the language in a big hurry) was a bug, not a feature”.

/**
 * http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/
 */


/**
 * To recap:
 * 1. Static (lexical) scope is when function knows the resolution environment for free variables at time of creation.
 * 2. Closures is a natural continuation of the static scope. One can say: “closure == static scope”.
 * 3. Dynamic scope is when a caller provides the callee’s resolution environment at activation.
 * 4. Runtime-augmented scope is when own activation environment is not determined at static time, and can be mutated by the callee itself.
 */



/**
 * Static scope
 *
 * Definition 1: Static scope: a language implements static scope,
 * if only by looking at the source code one can determine in which environment a binding is resolved.
 *
 * NOTE: variable x for the print_x function is free, since it’s neither a parameter, nor a local variable of this function.
 *
 * Definition 2: Static scope: technically static scope is naturally
 * implemented by closures, through the mechanism of capturing free-variables in lexical environments.
 *
 * NOTE: example below works in languages without closures as well — through only the global scope.
 */

/**
 * JavaScript static scope example.
 */
!function() {
  console.log('case Static scope');

  const x = 10;

  function print_x() {
    console.log(x);
  }

  function run() {
    const x = 20;
    print_x(); // 10, not 20
  }

  run();
}();


/**
 * Dynamic scope
 *
 * Definition 3: Dynamic scope: a language implements dynamic scope, if a caller defines an activation environment of a callee.
 */

// # Perl example of static and dynamic scopes

// $x = 10;

// sub print_x {
//   print $x;
// }

// sub static {
//   my $x = 20; # doesn't affect
//   print_x(); # 10, not 20
// }

// static();

// sub dynamic {
//   local $x = 20; # affects!
//   print_x(); # 20, not 10!
// }

// dynamic();

/**
 * Definition 4: This value: in JavaScript this value is dynamically scoped, unless used in an arrow function.
 *
 * NOTE: by this principle works OOP in most of the languages: a class is just a storage of methods,
 * which are executed in needed context, working with dynamic this value.
 *
 * As we also mentioned, introduced in ES2015 ARROW FUNCTIONS USE LEXICAL (i.e. static) scope,
 * and capture this in the lexical environment, same as other variables.
 */

 /**
 * JavaScript dynamic `this` value.
 */

console.log('case Dynamic scope');
function produce() {
  console.log(this.x);
}

const alpha = {produce, x: 1};
const beta  = {produce, x: 2};
const gamma = {produce, x: 3};

console.log(
  alpha.produce(), // 1
  beta.produce(),  // 2
  gamma.produce(), // 3
);


/**
 * Runtime-augmented scope
 *
 * Definition 5: Runtime-augmented scope: happens when an activation
 * frame is not statically determined, and can be mutated by the callee itself.
 */

/**
 * JavaScript runtime-augmented scope example.
 */

!function() {

  console.log('case Runtime-augmented scope');
  let x = 10;

  let o = {x: 30};
  let storage = {};

  (function foo(flag) {

    if (flag == 2) {
      eval("var x = 20;"); // cannot create local x in ES5 strict, will be skipped
    }
    if (flag == 4) {
      eval("x = 20;"); // assign global var value x
    }

    if (flag == 3) {
      storage = o;
    }

    console.log(x);

    // with (storage) { // DENY in ES5 strict mode

    //   // "x" may be resolved either
    //   // in the global scope - 10, or
    //   // in the local scope of a function - 20
    //   // (created via "eval" function), or even
    //   // in the "storage" object - 30

    //   console.log(x); // ? - scope of "x" is undetermined at compile time
    // }

    // organize recursion on 3 calls

    if (flag < 4) {
      foo(++flag);
    }

  })(1);

}();

export const result = 'done';


// 1. как правильно переводится эти выражение: Lexical environments и Lexical scope?.
// (для себя перевел как Лексическое окружение/контекст и лексическая область видимости)
// Да, все верно. “Scope” — область видимости. По поводу “environment” — чаще используется “лексическое окружение”
// (т.е. та среда, которая в коде лексически окружает объявление функции), но и “лексический контекст” тоже подойдет.

// 2. правильно ли я понял, что Dynamic scope как таковой в ES отсутствует?
// Да. Но, как отмечено, with и eval могут быть рассмотрены как конструкции, “привносящие динамику” в лексический скоп.
// Но не в классическом смысле динамической ОВ (области видимости), а в плане,
// что невозможно на этапе парсига определить, в какой ОВ переменная будет разрешена позже при обращении.
//
// ES5 striсt (и, соответственно, ES6 Harmony) отменили with, а eval запускается в своей “песочнице”
// и не может создать переменную в вызывающем контексте (кроме косвенного вызова eval’a).
// Т.е. из ES5-strict удалены фичи динамического скопа.

// 3. откуда у вас сведения, что инструкция let появится в ES6 (интересно же почитать о том что может нас порабовать в будущем)
// Основное обсуждение дизайна ES ведется в листе es-discuss. Периодически результаты обсуждений
// и предложений описываются на официальном сайте http://ecmascript.org.

// 4. и если вас не затруднит могли бы вы хоть в кратце прояснить ситуацию о Variable Environment
// (т.к. она здесь не обсуждаеься) и ее отличиями с Lexical environments
// Данная статья — это общая теория безотносительно конкретных языков программирования (однако, описанная на примерах различных языков).
// Предполагается, что после прочтения этой статьи, конкретика уже должна восприниматься именно как конкретика,
// которая использует внутри именно механизмы этой общей теории.

// Но, поскольку данный цикл статей посвящен именно ECMAScript, мы конечно будем подробно
// и в деталях разбирать всю конкретику ES в следующей статье “Chapter 3.2. Lexical Environments. ECMAScript implementations”,
// т.к. там тоже много своих нюансов (но, повторю, “ядром” этих всех нюансов является именно эта общая теория, описанная здесь в 3.1).

// Здесь же кратко отмечу. Оба компонента: и VariableEnvironment (VE), и LexicalEnvironment (LE) являются свойствами контекста исполнения.
// При этом первый служит для инстанцирования переменных при входе в контекст
// (т.е. это тот самый variable object, VO и ES3), а второй — для разрешения переменных уже в рантайме.

// Изначально, LE равна VE. Однако в процессе исполнения кода, LE может меняться
// (например, заменяться средой, созданной with), в то время как VE никогда не меняется на протяжении кода контекста.

// Основное отличие — при работе с разными видами функций. FD запоминает в качестве [[Scope]] VE, а FE,
// соответственно, LE, т.к. в отличие от FD может быть создана в рантайме и, например, внутри with, когда LE контекста будет подменена.

// Подробней будем разбирать в 3.2.



// Question: Особенно интересна будет следующая, хотелось бы по подробнее познакомиться с современными движками и обработкой им областей видимости.

// Answer: Да, ES5 вводит некоторую оптимизацию для обработки лексических окружений.
// Выделяют декларативную запись окружения (declarative environment record) и, соответственно, объектную запись окружения (object environment record).
// Фактически первая, для хранения биндингов (переменных), может использовать не объекты на куче,
// а прямо регистры виртуальной машины. Вторая используется для with и глобального объекта.
// Про конкретные реализации в конкретных движках сказать не могу, т.к. я не имплементер.

// Question: В 5ой редакции по идее движки должны сохранять только нужные (используемые) переменные в области видимости,
// а вот в 3ей редакции не понятно как поступают движки, ведь если судить по тому,
// что через eval можно получить любую переменную и области видимости,
// то при “встрече” в коде сохраняются все переменные “родительских” областей.

// Answer: Вообще, и в 5-ой редакции ничего не сказано про то, что не все переменные должны замыкаться.
// Как и в 3-ей редакции родительское окружение сохраняется полностью (точнее, ссылка на него).
// Соответственно, если функция содержит другие внутренние функции или eval
// (или еще хуже интересней – eval по неизвестным заранее родительским переменным внутри вложенных функций),
// то должен быть способ получить эти переменные. Здесь уже оптимизация с регистрами виртуальной машины не прокатит.
// Однако, как мы видели, Python, например, забивает на eval и не сохраняет все подряд, а только нужное.

// Question: П.С. “Гармоничный” это в том смысле, что ES4 (ActionScript) и ES3/ES5 (JavaScript) смогут перейти на него бесконфликтно?

// Answer: Не уверен насчет ES4 😉 он мало коррелирует с Harmony.
// “Гармоничный” скорей всего, что все-таки договорились в свое время, в какую сторону двигаться.



/**
 *  http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-2-lexical-environments-ecmascript-implementation/
 */



// A lexical environment defines the association of identifiers to the values
// of variables and functions based upon the lexical nesting structures of ECMAScript code.

// An environment record records the identifier bindings
// that are created within the scope of this lexical environment.

var x = 10;

function foo() {
  var y = 20;
}

// environment of the global context
globalEnvironment = {

  environmentRecord: {

    // built-ins:
    Object: function,
    Array: function,
    // etc ...

    // our bindings:
    x: 10

  },

  outer: null // no parent environment

};

// environment of the "foo" function

fooEnvironment = {
  environmentRecord: {
    y: 20
  },
  outer: globalEnvironment
};

/**
 * Environment record types
 * There are two kinds of environment records in ES5 specification:
 *    declarative environment records and object environment records.
 */


 /**
  * Declarative environment record
  * Declarative environment records are used to handle variables,
  * functions, formal parameters, etc. appeared in function scopes
  * (in this case this is very activation object which we know from ES3 series) and catch clauses.
  */

// all: "a", "b" and "c", bindings are bindings of a declarative record
function foo(a) {
  var b = 10;
  function c() {}
}

try {
  ...
} catch (e) { // "e" is a binding of a declarative record
  ...
}

// In general case the bindings of declarative records are assumed
// to be stored directly at low level of the implementation
// (for example, in registers of a virtual machine, thus providing fast access).
// This is the main difference from the old activation object concept used in ES3.

/**
 * Object environment record
 */