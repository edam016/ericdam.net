import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import PreLoading from './components/PreLoading.tsx';
import Homepage from './components/Homepage.tsx';

import hero_image from '/Users/pacpl/Desktop/ericdam.net/ericdam.net/src/assets/eric_1.png';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
          {loading ? <PreLoading /> : <Homepage />}
      </header>
    </div>
  );
}

export default App;
