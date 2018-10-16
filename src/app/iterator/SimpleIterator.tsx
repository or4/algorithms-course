import React from 'react';


type Props = {};
type State = {
  fontSize: number;
};

export class SimpleIterator extends React.Component<Props, State> {
  render() {
    const arr = [1, 2, 3, 4, 5];
    const iter = arr[Symbol.iterator]();
    console.log(iter.next()); // { value: 1, done: false }
    console.log(iter.next()); // { value: 2, done: false }
    console.log(iter.next()); // { value: 3, done: false }
    console.log(iter.next()); // { value: 4, done: false }
    console.log(iter.next()); // { value: 5, done: false }
    console.log(iter.next()); // { value: undefined, done: true }

    return (
      <div>
        <h3>SimpleIterator</h3>
        <div>
          <h5>ES6 - Some of the built in data structure that use iterable are :</h5>
          <h5>Iterators - Object that knows how to access items from a collection one at a time, while keeping track of its current position within that sequence.</h5>

          <ul>
            <li>Arrays</li>
            <li>Strings</li>
            <li>Maps</li>
            <li>Sets etc.</li>
          </ul>
        </div>
      </div>
    );
  }
}
