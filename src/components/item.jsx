import React from 'react';

class Item extends React.Component {
  render() {
    let { elem, index } = this.props

    return (
      <div className="game-item" key={index}>

        <br/>
        {elem}
      </div>
    );
  }
}

export default Item;