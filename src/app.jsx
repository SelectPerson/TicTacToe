import React from 'react';
import Main from './components/main'

let ticTacToe = [
  null, null, null,
  1, 0, null,
  null, null, null
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