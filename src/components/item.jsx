import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemGame: this.props,

    }
    this.handleElem = this.handleElem.bind(this)
  }
  componentDidMount() {

  }
  handleElem() {

    if(this.state.itemGame.elem === null) {
      this.setState({
        itemGame: {
          elem: 1
        }
      });
    }

  }
  render() {

    let setElem = (this.state.itemGame.elem === null) ? '' : this.state.itemGame.elem ? 'X' : 'O'

    // console.log(setElem)
    return (
      <div className="game-item" onClick={ this.handleElem }>
        {setElem}
      </div>
    );
  }
}

export default Item;