import React from 'react';
import ReactDOM from 'react-dom';

// import Ex2 from './excerices/Ex2';
// import Test1 from './test/Test1';
// import LoadingScreenExample from './hoc/LoadingScreenExample';
// import Test1Format from './fp/Test1Format';
// import { result } from './fp/Transducer';
// import { result } from './fp/ramda/CurryN';
// import { result } from './fp/ramda/Compose';
// import { result } from './animate/Test1';
// import { result } from './js/scope/this1';
import { result } from './js/scope/scope';

const App = () => (
  <div>
    {result}
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement != null) {
  ReactDOM.render(<App />, rootElement);
}
