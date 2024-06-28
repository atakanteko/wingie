'use client';

import React from 'react';
interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError: React.FC<Props> = ({ reset }) => {
  return (
    <div className='error-container'>
      <div className='error-content'>
        <h2 className='error-heading'>Something went wrong!</h2>
        <button className='error-button' onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
};

export default GlobalError;
