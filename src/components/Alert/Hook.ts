import { useContext } from 'react';
import AlertContext from './Context';

const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlert must be used within Alert');
  }

  return context;
};

export default useAlert;
