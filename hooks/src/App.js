import './App.css';
import { Route,Router,Routes } from 'react-router-dom';
import UseState from './useState/UseState';
import UseStateForm from './useState/UseStateForm';
import ApiCall from './useEffect/ApiCall';
import ApiDependency from './useEffect/ApiDependency';
import Counter_useState from './useReducer/Counter_useState';



function App() {
  return (
   <>
   <UseState />
   <UseStateForm />
   <ApiCall />
   <ApiDependency />
   <Counter_useState />

   </>
  );
}

export default App;
