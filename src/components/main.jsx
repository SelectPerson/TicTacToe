import React from 'react';
import './style.scss'

import ItemGame from './item'

class Main extends React.Component {
  render() {
    let ticTacToe = this.props.ticTacToe
    const ticTocToeItem = ticTacToe.map((elem, index) => {
      return (
        <React.Fragment>
          <ItemGame elem={elem} index={index} />
        </React.Fragment>
      )
    })
    return (
      <div className="game">
        {ticTocToeItem}
      </div>
    );
  }
}

export default Main;