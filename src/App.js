import React,{ useState } from 'react';
import './App.css';
import Materials from './components/Materials';

function App() {  

  const [isStudent] = useState(false);

  return (
    <div className="app">
      <Materials 
        isStudent={isStudent}
      />
    </div>
  );
}

export default App;