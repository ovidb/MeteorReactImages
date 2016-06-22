import React from 'react';

const ImageDetail =(props) => {
  //props.image => this is the image object
  //props.image.title



  return (
    <li>{props.image.title}</li>
  );
};

export default ImageDetail;
