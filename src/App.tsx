import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Props from "./Props";
import MyForm from "./Form";
import { newCtxt } from "./context/MyContext";
function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(newCtxt);
  const HeaderText = "Hello text";

  return (
    <div className='App'>
      <Props headerText={HeaderText} />
      <MyForm />
      <p>{state.age}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
        Set value to 100
      </button>
    </div>
  );
}

export default App;
