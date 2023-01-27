import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import './App.css';

function App() {
  //states are only initiallized with default values when a component is mounted / created for first time
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  // func will be the same in memory cause of useCallback
  // The memoized version of the function will only change if one of the dependencies has changed.
  const toggleParagraphHandler = useCallback(() => {
    // values that come from outside the function should be set as a dependency
    if (allowToggle) {
      // doesn't give latest state from when the component was rendered (gives latest state which is schedualed)
      // prevShowParagraph points to prev snapshot of the state
      // if 2 state changes in 1 sychronous code then, the states will be batched, meaning that 1 scheduled state change will happen which will make 2 state changes, thus only 1 re-execution of component is needed
      setShowParagraph((prevShowParagraph) => !prevShowParagraph); // set the state to the opposite value of the prevState
    }
  }, [allowToggle]);
  // if allowToggle changes then recreate the func & store the recreated func

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  // even though there's no prop changing in the child components they're still re-executed like function calls
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
