import './App.css';
import { Route,Router,Routes } from 'react-router-dom';
import UseState from './useState/UseState';
import UseStateForm from './useState/UseStateForm';
import ApiCall from './useEffect/ApiCall';
import ApiDependency from './useEffect/ApiDependency';



function App() {
  return (
   <>
   <UseState />
   <UseStateForm />
   <ApiCall />
   <ApiDependency />
   </>
  );
}

export default App;
