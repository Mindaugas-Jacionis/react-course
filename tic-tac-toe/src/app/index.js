import React from 'react';
import Winner from './components/Winner';
import { WINNING_COMBOS } from '../constants';

const dimensions = 3;
const endGame = dimensions ** 2 - 1;
const initial = () => [...Array(dimensions)].map(() => [...Array(dimensions)]);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: initial(),
      turn: 0,
      players: {
        one: {
          winner: false,
          icon: '🛸',
        },
        two: {
          winner: false,
          icon: '🚀',
        },
      },
    };
  }

  isWinner = (newGameData, player) =>
    WINNING_COMBOS.some(combo =>
      combo.every(([row, box]) => newGameData[row][box] === player.icon)
    );

  onClick = ({ row, box }) => {
    const { gameData, turn, players } = this.state;
    const playerId = turn % 2 === 0 ? 'one' : 'two';
    const currentPlayer = players[playerId];

    if (!gameData[row][box]) {
      gameData[row][box] = currentPlayer.icon;
      this.setState({ gameData, turn: turn + 1 });
    }

    if (this.isWinner(gameData, currentPlayer)) {
      players[playerId].winner = true;
      this.setState({ players });
    }
  };

  findWinner = () => {
    const { players } = this.state;
    return Object.values(players).find(player => player.winner);
  };

  restart = () => {
    this.setState({
      gameData: initial(),
      turn: 0,
      players: {
        one: {
          winner: false,
          icon: '🛸',
        },
        two: {
          winner: false,
          icon: '🚀',
        },
      },
    });
  };

  renderGame = () => {
    const { gameData } = this.state;

    return gameData.map((rowData, rowIndex) => (
      <div className="row" key={rowIndex}>
        {rowData.map((boxData, boxIndex) => (
          <button
            onClick={() => this.onClick({ row: rowIndex, box: boxIndex })}
            className="box"
            key={boxIndex}
            type="button"
          >
            {boxData}
          </button>
        ))}
      </div>
    ));
  };

  renderWinner = () => {
    const winner = this.findWinner();
    const message = winner ? `Winnner is: ${winner.icon}` : 'Nobody won :(';

    return (
      <div className="winner-container">
        <p>{message}</p>
        <button type="button" onClick={this.restart} className="primary-button">
          Restart
        </button>
      </div>
    );
  };

  render() {
    const winner = this.findWinner();
    const { turn } = this.state;

    return winner || endGame < turn ? (
      <Winner winner={winner} onClick={this.restart} />
    ) : (
      this.renderGame()
    );
  }
}

export default App;
