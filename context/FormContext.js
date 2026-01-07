import { createContext, useContext, useState } from 'react';

const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    mobile: '',
    name: '',
    address: '',
    pincode: '',
    playingStatus: '',
    sport: '',
    feedback: '',
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useForm must be used inside FormProvider');
  return ctx;
};
