import './App.css';
import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar/Searchbar';


class App extends Component {
  state = {
    searchValue: ''
  };

  searchValue = searchValue => {
    this.setState({ searchValue })
  };

  render() {
    return (
      <div className="App">
        <Searchbar inputValue={this.searchValue} />
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>);
  };
}

export default App;
