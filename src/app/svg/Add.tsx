import React from 'react';
import copy from './assets/copy.svg';

type Props = {
};
type State = {
};

export class Add extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h5>For svg exists `react-svg-loader`</h5>

        <div>
          <h5>Insert by img src</h5>
          <img src={copy} alt="" />
        </div>

        <div>
          <h5>Insert by svg-use</h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref={copy + '#container'} />
          </svg>
        </div>

        <div>
          <h5>Insert as react component</h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19.875,16.8333333 C19.875,16.9432917 19.8530625,17.0472917 19.8215625,17.1464167 L14.8125,11.9583333 L19.875,8.16666667 L19.875,16.8333333 L19.875,16.8333333 Z M5.00025,17.8874167 L10.07625,12.67875 L12,14.0789583 L13.8405,12.6700833 L18.99975,17.8874167 C18.9193125,17.9052917 5.0806875,17.9052917 5.00025,17.8874167 L5.00025,17.8874167 Z M4.125,16.8333333 L4.125,8.16666667 L9.1875,11.9583333 L4.1784375,17.1464167 C4.1469375,17.0472917 4.125,16.9432917 4.125,16.8333333 L4.125,16.8333333 Z M19.3125,7.08333333 L12,12.5 L4.6875,7.08333333 L19.3125,7.08333333 L19.3125,7.08333333 Z M18.75,6 L5.25,6 C4.0074375,6 3,6.970125 3,8.16666667 L3,16.8333333 C3,18.029875 4.0074375,19 5.25,19 L18.75,19 C19.9925625,19 21,18.029875 21,16.8333333 L21,8.16666667 C21,6.970125 19.9925625,6 18.75,6 L18.75,6 Z" />
          </svg>
        </div>
      </div>
    );
  }
}
