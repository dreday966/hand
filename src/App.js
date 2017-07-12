import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";

import {ImgReader} from './ImgReader'
import {FocusBox, HoverBox} from 'hoverbox';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragLayer } from 'react-dnd';
import Test from './Test';
import Container from './Container';
import {Surface} from 'react-canvas';

// var ReactCanvas = require('');

// var Surface = ReactCanvas.Surface;
// var Image = ReactCanvas.Image;
// var Text = ReactCanvas.Text;

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INPUT':
      return {...state, file: action.payload}
    case 'IMG':
      return {...state, img: action.payload}
    default:
      return state
  }
}

const store = createStore(
  reducer
);

store.subscribe(a => {
  const b = store.getState();
  debugger
});

const Linainai = () => (
  <div style={{
    height: '100px', width: '100px',
    background: 'red'
  }}>
  <span style={{
    display: 'inline-block',
    transform: 'rotate(-7deg)',
    WebkitTransform: 'rotate(-7deg)',
  }}>a</span>
  </div>
) 

const Li = DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
}))(Linainai);

class App extends Component {
  
  state = {
    snapToGridAfterDrop: false,
    snapToGridWhileDragging: false
  };
  render() {
    const { snapToGridAfterDrop, snapToGridWhileDragging } = this.state;
    
    return (
      <Provider store={store}>
      <div className="App">
         {/* <Surface width={100} height={100} left={0} top={0}>
          {/* <Text >
            Here is some text below an image.
          </Text> */}
        
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          
        </div>
        <p className="App-intro" 
          onClick={() => store.dispatch({type: 'yp'})}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container snapToGrid={snapToGridAfterDrop}></Container>
        <Test snapToGrid={snapToGridAfterDrop}></Test>

      </div>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
