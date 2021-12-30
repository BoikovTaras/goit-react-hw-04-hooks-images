import React from 'react';
import s from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <div className={s.buttonBox}>
      <button className={s.button} type="button" onClick={onClick}>
        Load more...
      </button>
    </div>
  );
}
