import React from 'react';
import './loader.css';
export default function Loader({ isLoading }){
    return (
      <div className={`loader-container ${isLoading ? ' ' : 'loading'}`}>
      <div className={`loading-icon poppins-black ${isLoading ? '' : 'zoom'}`}>&nbsp;&nbsp;TED<span className='text-7xl absolute translate-y-14'>X</span>&nbsp;&nbsp;<span className='text-[#eae6e6]'>DAVV</span></div>
    </div>
    );
}