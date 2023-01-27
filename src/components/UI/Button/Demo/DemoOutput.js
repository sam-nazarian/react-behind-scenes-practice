import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  // Change for the enitre p elm, as the text is treated as prop to the elm
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

// component only re-executes when the props change compared to previous props
// has a cost of comparing props, good for large component tree
export default React.memo(DemoOutput);
