import React from 'react';

const MyParagraph = (props) => {
  console.log('MyParagraph RUNNING');
  // Change for the enitre p elm, as the text is treated as prop to the elm
  return <p>{props.children}</p>;
};

export default MyParagraph;
