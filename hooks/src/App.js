import './App.css';
import { Route,Router,Routes } from 'react-router-dom';
import UseState from './useState/UseState';
import UseStateForm from './useState/UseStateForm';
import ApiCall from './useEffect/ApiCall';
import ApiDependency from './useEffect/ApiDependency';
import Counter_useState from './useReducer/Counter_useState';
import Exmple from './useRef/Exmple';
import Parent from './useRef/forwordRef/Parent';
import Counter_without_useMemo from './useMemo/Counter_without_useMemo';
import Counter_with_useMemo from './useMemo/Counter_with_useMemo';
import ParentContext from './useContext/without_useContext/ParentContext';
import Parent_Context_hook from './useContext/with_useContext/Parent_Context_hook';



function App() {
  return (
   <>
   <UseState />
   <UseStateForm />
   <ApiCall />
   <ApiDependency />
   <Counter_useState />
    <Exmple />
    <Parent />
    <Counter_without_useMemo />
    <Counter_with_useMemo />
   <ParentContext />
   <Parent_Context_hook />
   </>
  );
}

export default App;
