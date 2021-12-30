import s from './Loader.module.css';
import React from 'react';

export default function Loader() {
  return (
    <div className={s.cssloadSquares}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
