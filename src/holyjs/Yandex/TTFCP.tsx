import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

const log = (str: string) => {
  console.log(str);
};

export function use_PerformanceEntry_methods() {
  log('PerformanceEntry tests ...');

  if (typeof performance.mark === 'undefined') {
    log('... performance.mark Not supported');
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark('Begin');
  // do_work(50000);
  performance.mark('End');
  performance.mark('Begin');
  // do_work(100000);
  performance.mark('End');
  // do_work(200000);
  performance.mark('End');

  // Use getEntries() to iterate through the each entry
  let p = performance.getEntries();
  for (let i = 0; i < p.length; i++) {
    log('Entry[' + i + ']');
    // check_PerformanceEntry(p[i]);
  }

  // Use getEntries(name, entryType) to get specific entries
  // p = performance.getEntries({ name: 'Begin', entryType: 'mark' });
  p = performance.getEntries();
  for (let i = 0; i < p.length; i++) {
    log('Begin[' + i + ']');
    // check_PerformanceEntry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType('mark');
  for (let i = 0; i < p.length; i++) {
    log('Mark only entry[' + i + ']: name = ' + p[i].name +
         '; startTime = ' + p[i].startTime +
         '; duration  = ' + p[i].duration);
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName('Begin', 'mark');
  for (let i = 0; i < p.length; i++) {
    log('Mark and Begin entry[' + i + ']: name = ' + p[i].name +
         '; startTime = ' + p[i].startTime +
         '; duration  = ' + p[i].duration);
  }
}


class TTFCP extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        TTFCP
      </div>
    );
  }
}
export default TTFCP;

