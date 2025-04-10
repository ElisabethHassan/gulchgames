import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    workoutType: "",
    players: 1
  });


  const updateForm = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };


  // // const { updateForm } = useForm();
  // const navigate = useNavigate();

//   const goToNextPage = (nextPage) => {
//       // Send update to the projector
//       if (window.wallWindow && !window.wallWindow.closed) {
//           window.wallWindow.postMessage({ type: "updateSlide", page: nextPage }, "*");
//       }

//     navigate(nextPage);
// };

  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
