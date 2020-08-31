import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className='notification has-background-black-ter has-text-white my-4'>
        <span className='icon'>
          <i className='fas fa-info-circle'></i>
        </span>
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
