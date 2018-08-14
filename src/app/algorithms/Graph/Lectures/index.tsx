import React from 'react';
import slide1 from './Small01.pdf';
import slide2 from './Small02.pdf';
import slide3 from './Small03.pdf';
import slide4 from './Small04.pdf';

type Props = {
};
type State = {
};

export class GraphLectures extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <h3>Lecture from stanford.edu</h3>
          <h5>Original <a href="https://web.stanford.edu/class/archive/cs/cs161/cs161.1138/">https://web.stanford.edu/class/archive/cs/cs161/cs161.1138/</a></h5>
          <div className="body-a-block">
            <a href={slide1} target="_blank">Lecture 01.pdf</a>
            <a href={slide2} target="_blank">Lecture 02.pdf</a>
            <a href={slide3} target="_blank">Lecture 03.pdf</a>
            <a href={slide4} target="_blank">Lecture 04.pdf</a>
          </div>
        </div>
      </div>
    );
  }
}
