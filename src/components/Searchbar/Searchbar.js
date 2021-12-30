import { useState } from 'react';
import s from './Searchbar.module.css';

export default function Searchbar({ inputValue }) {
  const [input, setInput] = useState('');

  const searchInput = e => {
    setInput([e.target.value.toLowerCase()]);
  };

  const searchButton = event => {
    event.preventDefault();
    if (input === '') {
      alert('Enter your search term');
      return;
    }
    inputValue(input);
    setInput('');
  };

  return (
    <header className={s.searchbar}>
      <form className="form" onSubmit={searchButton}>
        <button type="submit" className="button">
          Поиск
        </button>

        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={input}
          onInput={searchInput}
        />
      </form>
    </header>
  );
}
