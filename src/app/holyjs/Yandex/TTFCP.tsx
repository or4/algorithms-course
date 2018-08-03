import React from 'react';
// import { theme } from 'app/ui/theme';

type Props = {
};
type State = {
};
/**
 * Time To First Content Painting
 * IMG_7324
 */
class TTFCP extends React.PureComponent<Props, State> {
  componentDidMount() {
    setTimeout(() => {
      console.log('**** **** first time **** ****');
      this.allTiming();
      this.resourceTiming();
    }, 1000);
    setTimeout(() => {
      console.log('**** **** second time **** ****');
      this.allTiming();
      this.resourceTiming();
      this.painTiming();
    }, 4000);
  }
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }

  allTiming = () => {
    console.log('allTiming');
    let resourceList = window.performance.getEntries();
    for (let i = 0; i < resourceList.length; i++) {
      console.log(resourceList[i], (resourceList[i].responseEnd - resourceList[i].startTime));
    }
    console.log('allTiming.length', resourceList.length);
  }

  resourceTiming = () => {
    console.log('resourceTiming');
    let resourceList = window.performance.getEntriesByType('resource');
    for (let i = 0; i < resourceList.length; i++) {
      resourceList[i].initiatorType === 'img' &&
        console.log(resourceList[i], (resourceList[i].responseEnd - resourceList[i].startTime));
    }
    console.log('resourceList.length', resourceList.length);
  }

  painTiming = () => {
    console.log('painTiming');
    let resourceList = window.performance.getEntries();
    for (let i = 0; i < resourceList.length; i++) {
      resourceList[i].entryType === 'paint' &&
        console.log(resourceList[i], (resourceList[i].responseEnd - resourceList[i].startTime));
    }
    console.log('allTiming.length', resourceList.length);
  }

  /**
   * 350-500
   */

  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        <h3>TTFCP</h3>
        <p>Can see that for pure html TTFCP equal 50ms, for React 400-500ms, because probably there are many other content in react ..</p>
        <img style={{ width: '100px' }} src="http://static.ngs.ru/news/99/preview/dc327202c3050f5c5a853a46be04459104728e85_1500.jpg" />
        <img style={{ width: '100px' }} src="http://static.ngs.ru/news/99/preview/27125e7eec5c81f4b0787688839a9c1575af73ae_3000.jpg" />
        <img style={{ width: '100px' }} src="http://static.ngs.ru/news/99/preview/27125e7eec5c81f4b0787688839a9c1575af73ae_3000.jpg" />
        <img style={{ width: '100px' }} src="http://static.ngs.ru/news/99/preview/27125e7eec5c81f4b0787688839a9c1575af73ae_3000.jpg" />
        <img style={{ width: '100px' }} src="http://static.ngs.ru/news/99/preview/27125e7eec5c81f4b0787688839a9c1575af73ae_3000.jpg" />
        <img style={{ width: '100px' }} src="http://static.ngs.ru/news/99/preview/312e42c0919b918fe878ade84d97671671f03166_3000.jpg" />
        <img style={{ width: '100px' }} src="http://static.ngs.ru/news/99/preview/19962723ad11b9dfd88904bd8a0b93610bf739d1_1200.jpg" />
        <img style={{ width: '100px' }} src="http://static.ngs.ru/news/99/preview/603360bf10542ae1b090012298b6510172ca8698_1500.jpg" />
      </div>
    );
  }
}
export default TTFCP;

