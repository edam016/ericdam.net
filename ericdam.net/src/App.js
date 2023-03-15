import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import PreLoading from './components/PreLoading.tsx';
import Homepage from './components/Homepage.tsx';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
          {loading ? <PreLoading loading={loading} /> : <Homepage />}
      </header>
    </div>
  );
}

export default App;
