import React from 'react';
import PropTypes from 'prop-types';
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
Button.propTypes = {
  onClick: PropTypes.func,
};
