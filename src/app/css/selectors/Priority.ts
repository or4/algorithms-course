/*
tag - 1
class - 10
identificator - 100
inline - 1000

pseudo-element - 1 (:first-child)
pseudo-class - 10 (:hover, :link)

если два приоритета одинаковы по значению, то побеждает последний


Example:

body div img - 3
.image - 10

body div img {
  border: 1px solid black
}

.image {
  border: 1px solid green
}

will be applied .image, because 10 > 3



*/