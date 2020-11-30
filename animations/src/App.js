import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalShow: false,
    showBlock: false,
  };

  componentDidUpdate() {
    console.log(this.state.showBlock);
  }

  showModal = () => {
    console.log('Show modal worked');
    this.setState({ modalShow: true });
  };

  hideModal = () => {
    this.setState({ modalShow: false });
  };

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <button
          className='Button'
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle Block
        </button>
        <br />
        <Transition in={this.state.showBlock} timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: '20px auto',
                opacity: state === 'exiting' ? 0 : 1,
                transition: 'opacity 1s ease-out' 
              }}
            ></div>
          )}
        </Transition>

        {this.state.modalShow ? (
          <Modal show={this.state.modalShow} closed={this.hideModal} />
        ) : null}
        {this.state.modalShow ? <Backdrop show={this.state.modalShow} /> : null}
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
