import PlayerInfo from "./components/PlayerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo playerName="Player 1" playerSymbol="X" />
          <PlayerInfo playerName="Player 2" playerSymbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
