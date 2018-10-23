/*
a:link - user not followed to link
a:visited - user already has followed to link
a:hover - mouse over link
a:active - when clicked or pressed on block
a:focus - when pressed tab and get focus
  when mouse click on block, call focus, then active
  state is :focus:active


:first-child {
}
:last-child {
}
:only-child { // where one child
}

li:nth-child(odd) { нечетные
}
li:nth-child(even) { четные
}
li:nth-child(2) { second
}
li:nth-child(2n) { like even
}
li:nth-child(2n + 1) { like odd
}
li:nth-child(n + 3) { skip first 2
}
li:nth-child(-n + 3) { skip last after 3
}

:first-of-type {
}
:last-of-type {
}
:nth-of-type(odd) {
}
:nth-of-type(even) {
}
:nth-of-type(2n+1) {
}
  Выбирает каждый четвёртый элемент <p>
  среди любой группы соседних элементов.
  p:nth-of-type(4n) {
    color: lime;
  }


#regForm:target {
  display: block;
}
#regForm {
  display: none;
}
Example
<a href="#regForm">Go to form</a>
<form id="regForm">
</form>

:not
p:not(.red) {
  color: blue;
}
a[href^="http"]:not([href^="http://mysite.com"]) {
  color: blue;
}
1. С селектором :not можно использовать только простые селекторы.
  Селектор тегов, универсальный селектор *, классы, идентификаторы, псевдоклассы (:hover, :checked, :first-child)
  .foo:not(div)
  img:not(.portrait)
  div:not(#banner)
  li:not(:first-child)

2. Нельзя использовать селекторы потомков (div p a), псеводэлементы (::first-line),
  групповые селекторы или комбинации (такие как родственный смежный селектор h2 + p, h2 ~ p)

3. Нельзя в одной строке использовать несколько селекторов :not.
  Следующий код будет неправильным
  a[href^="http://"]:not([href*=google.com]):not([href*="yahoo.com"])

*/