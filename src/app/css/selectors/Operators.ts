/*
  Space - all children of element
  Do for only sub items and for ALL levels
  div div

  > - nearest children of element
  Do only for sub children and only ONE level
  div > div

  + - is used to select elements that is placed immediately after (not inside) the first specified element.
  Do only for only ONE right contiguous item and only this level

  ~ - tilda
  Do only for only ALL right contiguous items and only this level

  .a ~ .b matches the 4th and 5th
  .a ~ .b {
    background-color: powderblue;
  }
  <ul>
    <li class="b">1st</li>
    <li class="a">2nd</li>
    <li>3rd</li>
    <li class="b">4th</li>
    <li class="b">5th</li>
  </ul>
*/