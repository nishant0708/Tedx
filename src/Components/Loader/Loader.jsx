import React from 'react';
import './loader.css';

export default function Loader({ isLoading }) {
  return (
    <div className={`loader-container ${isLoading ? '' : 'loading'}`}>
      <div className={`loading-icon ${isLoading ? '' : 'zoom'}`}>
        <img src="./x.svg" alt="Loading icon" className="svg-icon" />
      </div>
    </div>
  );
}
