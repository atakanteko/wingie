// NotFound.tsx

import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <div className='not-found-content'>
        <h2 className='not-found-heading'>Not Found</h2>
        <p>Could not find the requested resource.</p>
        <Link href='/' className='error-button'>
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
