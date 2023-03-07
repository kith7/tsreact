import { createContext, useReducer } from "react";
type AppState = typeof initialState;

const initialState = {
  age: 0,
};
interface InputProviderProps {
  children: React.ReactNode;
}
type Action =
  | { type: "SET_INPUT_VALUE"; payload: number }
  | { type: "SET_INPUT_VALUE_TO_100" };

const newCtxt = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return { ...state, age: action.payload };
    case "SET_INPUT_VALUE_TO_100":
      return { ...state, age: 100 };
    default:
      return state;
  }
};

const ContextProvider = ({ children }: InputProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <newCtxt.Provider value={{ state, dispatch }}>{children}</newCtxt.Provider>
  );
};

export { newCtxt, ContextProvider };
