import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { FormProvider } from "./context/FormContext";
import AppRoutes from './AppRoutes'; 
import './App.css'

function App() {
  return (
    <FormProvider>
      <Router>
        <AppRoutes />
      </Router>
    </FormProvider>
  );
}

export default App;


