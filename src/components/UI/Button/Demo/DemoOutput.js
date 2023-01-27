import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  // Change for the enitre p elm, as the text is treated as prop to the elm
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default DemoOutput;
