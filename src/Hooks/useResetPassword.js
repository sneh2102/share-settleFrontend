// useForgotPass.js
import { useState } from 'react';
import { useUserAuth } from '../Context/AuthContext';

export const useResetPassword = () => {
  const [lerror, setError] = useState(null);
  const [islLoading, setIsLoading] = useState(false);
  const { dispatch } = useUserAuth();

  const resetPass = async (id, token, password) => {
    setIsLoading(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_LINK}/api/user/reset-password/${id}/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const json = await response.json();
      toast.success("Passwored Changed")
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false);
    }
  };

  return { resetPass};
};
