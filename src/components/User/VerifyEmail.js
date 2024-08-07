// src/VerifyEmail.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { applyActionCode, getAuth } from 'firebase/auth';

const VerifyEmail = () => {
  const [message, setMessage] = useState('');
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const query = new URLSearchParams(location.search);
        const oobCode = query.get('oobCode');

        if (oobCode) {
          await applyActionCode(auth, oobCode);
          setMessage('Email verified successfully!');
        } else {
          setMessage('Invalid verification link.');
        }
      } catch (error) {
        setMessage('Error verifying email.');
      }
    };

    verifyEmail();
  }, [location, auth]);

  return (
    <div>
      <h2>Verify Email</h2>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;
