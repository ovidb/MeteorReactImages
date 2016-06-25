//Any js here will be automatically run by meteor.


// Import the React library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';



// Create a component
class App extends Component {
  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => console.log(response));
  }

  render() {
    return(
      <div>
        <ImageList />
      </div>
    );
  }
};

// Render this component to the screen.
Meteor.startup(()=> {
  ReactDOM.render(<App />, document.querySelector('.container'));

})
