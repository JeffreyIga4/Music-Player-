import { MusicPlayer } from "./components/MusicPlayer";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        {/*<Navbar/> */}
        <main className="app-main">
          <div className="player-section"></div>
            <MusicPlayer />
          <div className="content-section"></div>
            <Routes>
              <Route path="/" element={} />
            </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
