import { createContext, useContext, useState } from "react";

// Create Context
const FormContext = createContext();

// Create a Provider Component
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

// Custom Hook to Use Context
export const useForm = () => useContext(FormContext);
