import React from 'react';
import * as R from 'ramda';
import { Map, fromJS, List } from 'immutable';
import { objToString } from '../../ramda/helpers';



type Props = {
};
type State = {
};
type StoreType = {
  storeId: string;
   price: number;
};

export class SimpleBook extends React.PureComponent<Props, State> {
  render() {
    let book = fromJS({
      title: 'Harry Potter & The Goblet of Fire',
      isbn: '0439139600',
      series: 'Harry Potter',
      author: { firstName: 'J.K.', lastName: 'Rowling' },
      genres: ['Crime', 'Fiction', 'Adventure'],
      storeListings: [{ storeId: 'amazon', price: 7.95 }, { storeId: 'barnesnoble', price: 7.95 }, { storeId: 'biblio', price: 4.99 }, { storeId: 'bookdepository', price: 11.88 }]
    });

    // Maps modifying data
    book = book.setIn(['author', 'lastName'], 'Bowling');

    // Change genre from Crime to Fantasy
    book = book.setIn(['genres', 0], 'Fantasy');
    // Add new genre - Wizards, bad method
    book = book.set('genres', book.get('genres').push('Wizards1'));
    // Add new genre - Wizards, better method
    book = book.update('genres', (genres: string[]) => genres.push('Wizards2'));
    // Update specify price
    book = book.setIn(['storeListings', 0, 'price'], 6.80);

    // Update specify price, find by name
    const indexOfListingToUpdate = book.get('storeListings').findIndex((listing: Map<string, string>) => listing.get('storeId') === 'amazon');
    book = book.setIn(['storeListings', indexOfListingToUpdate, 'price'], 6.80);

    // Calc avg price
    const avgPrice = book.get('storeListings').reduce((total: number, value: Map<string, number>) => total + value.get('price'), 0) / book.get('storeListings').count();

    // Update prices
    book = book.update('storeListings', (storeListings: List<Map<string, number>>) => storeListings.map(listing => listing && listing.update('price', price => price * 0.9)));

    // Show Result
    // (book as Map<string, any>).toJS();

    return (
      <div>
        <h3>Book Simple Example</h3>
        <div>{`let book = fromJS({`}</div>
        <div>{`title: 'Harry Potter & The Goblet of Fire',`}</div>
        <div>{`isbn: '0439139600',`}</div>
        <div>{`series: 'Harry Potter',`}</div>
        <div>{`author: { firstName: 'J.K.', lastName: 'Rowling' },`}</div>
        <div>{`genres: ['Crime', 'Fiction', 'Adventure',],`}</div>
        <div>{`storeListings: [{ storeId: 'amazon', price: 7.95 }, { storeId: 'barnesnoble', price: 7.95 }, { storeId: 'biblio', price: 4.99 }, { storeId: 'bookdepository', price: 11.88 }, ]`}</div>
        <div>{`});`}</div>

        <h3>Maps</h3>
        <h5>READING DATA</h5>
        <div>{`book.get('title') = ${objToString(book.get('title'))}`}</div>
        <div>{`book.getIn(['author', 'lastName']) = ${objToString(book.getIn(['author', 'lastName']))}`}</div>

        <h5>MODIFYING DATA</h5>
        <div>{`book = book.setIn(['author', 'lastName'], 'Bowling');`}</div>

        <h3>Lists</h3>
        <h5>READING DATA</h5>
        <div>{`book.getIn(['genres', 1]) = ${objToString(book.getIn(['genres', 1]))}`}</div>
        <div>{`book.getIn(['storeListings', 0, 'price']) = ${objToString(book.getIn(['storeListings', 0, 'price']))}`}</div>
        <h5>MODIFYING DATA</h5>
        <h5>Change genre from Crime to Fantasy</h5>
        <div>{`book = book.setIn(['genres', 0], 'Fantasy');`}</div>
        <h5>Add new genre - Wizards, bad method</h5>
        <div>{`book = book.set('genres', book.get('genres').push('Wizards1'));`}</div>
        <h5>Add new genre - Wizards, better method</h5>
        <div>{`book = book.update('genres', genres => genres.push('Wizards2'));`}</div>
        <h5>Update specify price</h5>
        <div>{`book = book.setIn(['storeListings', 0, 'price'], 6.80);`}</div>

        <h5>Update specify price, find by name</h5>
        <div>{`const indexOfListingToUpdate = book.get('storeListings').findIndex((listing: Map<string, string>) => listing.get('storeId') === 'amazon');`}</div>
        <div>{`book = book.setIn(['storeListings', indexOfListingToUpdate, 'price'], 6.80);`}</div>

        <h5>Calc avg price</h5>
        <div>{`const avgPrice = book.get('storeListings').reduce((total: number, value: Map<string, number>) => total + value.get('price'), 0) / book.get('storeListings').count();`}</div>
        <div>{`avgPrice = ${objToString(avgPrice)}`}</div>

        <h5>Update prices</h5>
        <div>{`book = book.update('storeListings', (storeListings: List<Map<string, number>>) => storeListings.map(listing => listing && listing.update('price', price => price * 0.9)));`}</div>

        <h3>Result</h3>
        <div>{`(book as Map<string, any>).toJS() = ${objToString((book as Map<string, any>).toJS())}`}</div>


      </div>
    );
  }
}
