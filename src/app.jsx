import React from 'react';
import Main from './components/main'

let ticTacToe = [
  0, 0, 1,
  1, 1, 0,
  0, 1, 0
]


class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Main ticTacToe={ticTacToe}/>
      </React.Fragment>
    );
  }
}

export default App;