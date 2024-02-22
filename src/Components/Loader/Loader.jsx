import React from 'react';
import './loader.css';
export default function Loader({ isLoading }){
    return (
      <div className={`loader-container ${isLoading ? ' ' : 'loading'}`}>
      <div className={`loading-icon poppins-black ${isLoading ? '' : 'zoom'}`}>&nbsp;&nbsp;TED<span className='text-7xl absolute translate-y-14'>X</span>&nbsp;&nbsp;<span className=' text-white'>DAVV</span></div>
    </div>
    );
}