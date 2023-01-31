import React,{ useState } from 'react';
import './App.css';
import Materials from './components/Materials';
import Assignments from './components/Assignments';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  

  const [isStudent] = useState(false);

  return (
    <div className="app">
      <Materials />
    </div>
  );
}

export default App;