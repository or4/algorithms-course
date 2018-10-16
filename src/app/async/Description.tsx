import React from 'react';

type Props = {};
type State = {
};

export class Description extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h3>Async await</h3>
        <div>
          <h3>1. Await can only be used inside an async function.</h3>
          <h3>2. Functions with the async keyword will always return a promise.</h3>
          <h3>3. Multiple awaits will always run in sequential order under a same function.</h3>
          <h3>4. If a promise resolves normally, then await promise returns the result. But in case of a rejection it throws the error, just if there were a throw statement at that line.</h3>
          <h3>5. Async function cannot wait for multiple promises at the same time.</h3>
          <h3>6. Performance issues can occur if using await after await as many times one statement doesn’t depend on the previous one.</h3>
        </div>
      </div>
    );
  }
}
