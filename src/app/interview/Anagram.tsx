import React from 'react';

type Props = {
};
type State = {
};

const isAnagram = (str1: string, str2: string) => str1.split('').sort().join('') === str2.split('').sort().join('');

export class Anagram extends React.PureComponent<Props, State> {

  render() {

    return (
      <div>
        <h3>Anagram</h3>
        <div>{isAnagram('asdf', 'sdfa')}</div>
        <div>{isAnagram('asdf', 'sdfa3')}</div>
      </div>
    );
  }
}
