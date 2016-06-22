//Any js here will be automatically run by meteor.


// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';

// Create a component
const App = () => {
  return(
    <div>
      React App #2
    </div>
  );
};

// Render this component to the screen.
ReactDOM.render(<App />, document.querySelector('.container'));
