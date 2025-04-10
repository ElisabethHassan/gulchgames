import { createContext, useContext, useState } from "react";

const FormContext = createContext();

// saves form information
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    workoutType: "",
    players: 1
  });


  const updateForm = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };


  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
