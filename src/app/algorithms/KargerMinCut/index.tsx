import React from 'react';
import * as R from 'ramda';
// import { data } from './data/data';
import { data as realdata2 } from './data/data2';
import { data as testDataSimple } from './data/dataSimple';
import { data as testData3x6 } from './data/dataTest3-6';
import { data as testData4x6 } from './data/dataTest4-6';
import { data as testData5x10 } from './data/dataTest5-10';
import { data as testData6x10 } from './data/dataTest6-10';
import { data as testData7x10 } from './data/dataTest7-10';
import { data as testData9x25 } from './data/dataTest9-25';
import { data as testData20x75 } from './data/dataTest20-75';
import { data as testData30x150 } from './data/dataTest30-150';
import { data as testData37x200 } from './data/dataTest37-200';
import { data as testData40x200 } from './data/dataTest40-200';
import { run } from './runner';


type Props = {
};
type State = {
  result: number;
};

export class KargerMinCut extends React.PureComponent<Props, State> {
  state = {
    result: -1,
  }
  componentDidMount() {
    // const result =  run(testDataSimple, 'simple') as number;
    // const result =  run(testData3x6, '3x6') as number;
    // const result = run(testData4x6, '4x6') as number;
    // const result = run(testData5x10, '5x10') as number;
    // const result = run(testData6x10, '6x10') as number;
    // const result = run(testData7x10, '7x10') as number;
    // const result = run(testData9x25, '9x25') as number;
    // const result = run(testData20x75, '20x75') as number;
    // const result = run(testData30x150, '30x150') as number;
    // const result = run(testData37x200, '37x200') as number;

    // const result = run(testData40x200, '40x200') as number;
    const result = run(realdata2, 'realdata') as number;
    this.setState({
      result,
    });
  }
  render() {
    const { result } = this.state;
    return (
      <div>
        <h3>KargerMinCut</h3>
        <h3>Result is {result}</h3>
      </div>
    );
  }
}
