import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};



requestAnimationFrame(() => {
  console.log('ttfmp_rAF_1', performance.now());
  requestAnimationFrame(() => {
    console.log('ttfmp_rAF_2', performance.now());
    requestAnimationFrame(() => {
      console.log('ttfmp_rAF_3', performance.now());
    });
  });
});


/**
 * Time To First Content Painting
 * IMG_7324
 */
class TTFMPio extends React.PureComponent<Props, State> {
  componentDidMount() {
    console.log('componentDidMount', performance.now());
    this.ttfmp();
    setTimeout(() => { this.painTiming() }, 4000);
  }
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  ttfmp() {
    requestAnimationFrame(() => {
      console.log('cmd ttfmp_rAF_1', performance.now());
      requestAnimationFrame(() => {
        console.log('cmd ttfmp_rAF_2', performance.now());
        requestAnimationFrame(() => {
          console.log('cmd ttfmp_rAF_3', performance.now());
        });
      });
    });
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
   * ttfmp_rAF_1 460.50000000013824
   * ttfmp_rAF_2 501.8000000000029
   * ttfmp_rAF_3 506.9999999996071
   * cmd ttfmp_rAF_1 461.4000000001397
   * cmd ttfmp_rAF_2 502.39999999939755
   * cmd ttfmp_rAF_3 507.59999999991123
   */

  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        <h3>TTFMP</h3>
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
export default TTFMPio;

