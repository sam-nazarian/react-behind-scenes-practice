import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  // Change for the enitre p elm, as the text is treated as prop to the elm
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

// if react.memo() was not used component would re-execute everytime it's parent component re-executes causing it to be inneficient, React.memo() helps with optimization by only re-executing this comopnent when the props change which is not necessorly the same as when the parent re-executes.

// after the component is rendered for the first time
// component only re-executes when the props change compared to previous props
// has a cost of comparing props, good for large component tree
// if component changes constantly then
export default React.memo(DemoOutput);
