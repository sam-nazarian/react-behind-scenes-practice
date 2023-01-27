import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    // set the state to the opposite value of the prevState
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
