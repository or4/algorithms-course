import React from 'react';
import './CssCounter.css';

type Props = {
};
type State = {
};

class CssCounter extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <div className="holyjs-css-responsive-container">
          <label htmlFor="holyjs-css-responsive-itemA">Add one</label>
          <input type="checkbox" id="holyjs-css-responsive-itemA" />
          <label htmlFor="holyjs-css-responsive-itemB">Add one</label>
          <input type="checkbox" id="holyjs-css-responsive-itemB" />
          <label htmlFor="holyjs-css-responsive-itemC">Add one</label>
          <input type="checkbox" id="holyjs-css-responsive-itemC" />
          <label htmlFor="holyjs-css-responsive-itemD">Add one</label>
          <input type="checkbox" id="holyjs-css-responsive-itemD" />
          <label htmlFor="holyjs-css-responsive-itemE">Cancel last</label>
          <input type="checkbox" id="holyjs-css-responsive-itemE" />

          <div className="holyjs-css-responsive-price">price</div>

        </div>
        <ol className="holyjs-css-responsive-ol">
          <li className="holyjs-css-responsive-li">item</li>
          <li className="holyjs-css-responsive-li">item
            <ol className="holyjs-css-responsive-ol">
              <li className="holyjs-css-responsive-li">item</li>
              <li className="holyjs-css-responsive-li">item</li>
              <li className="holyjs-css-responsive-li">item
                <ol className="holyjs-css-responsive-ol">
                  <li className="holyjs-css-responsive-li">item</li>
                  <li className="holyjs-css-responsive-li">item</li>
                </ol>
                <ol className="holyjs-css-responsive-ol">
                  <li className="holyjs-css-responsive-li">item</li>
                  <li className="holyjs-css-responsive-li">item</li>
                  <li className="holyjs-css-responsive-li">item</li>
                </ol>
              </li>
              <li className="holyjs-css-responsive-li">item</li>
            </ol>
          </li>
          <li className="holyjs-css-responsive-li">item</li>
          <li className="holyjs-css-responsive-li">item</li>
        </ol>
        <ol className="holyjs-css-responsive-ol">
          <li className="holyjs-css-responsive-li">item</li>
          <li className="holyjs-css-responsive-li">item</li>
        </ol>
      </div>
    );
  }
}
export default CssCounter;
