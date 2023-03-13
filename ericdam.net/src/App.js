import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
            {/* <Navbar /> */}
            <Hero />
          </div>
      </header>
    </div>
  );
}

export default App;
