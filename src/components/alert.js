import React from 'react';
export const Alert = ({ text }) => {
  return (
    <div className='alert alert-danger text-center' role='alert'>
      {text}
    </div>
  );
};
