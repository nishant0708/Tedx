import React from 'react';
import './loader.css';
export default function Loader({ isLoading }){
    return (
      <div className={`loader-container ${isLoading ? ' ' : 'loading'}`}>
      <div className={`loading-icon poppins-black ${isLoading ? '' : 'zoom'}`}>X</div>
    </div>
    );
}