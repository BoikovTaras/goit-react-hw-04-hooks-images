import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

export default function App() {
  const [value, setValue] = useState('');

  const searchValue = value => setValue([value]);

  return (
    <div className="App">
      <Searchbar inputValue={searchValue} />
      <ImageGallery name={value} />
    </div>
  );
}

App.propTypes = {
  value: PropTypes.string,
};
