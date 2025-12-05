import { MusicPlayer } from "./components/MusicPlayer";

function App() {

  return (
  <div className="app">
    {/*<Navbar/> */}
    <main className="app-main">
      <div className="player-section"></div>
      <MusicPlayer />
      <div className="content-section"></div>
    </main>
    </div>
  );
}

export default App
