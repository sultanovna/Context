import { createContext, useReducer } from "react";
import { addAction, reducer, removeAction } from "../reducer/reduser";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  function addPupil(name, surname, age) {
    dispatch(addAction(name, surname, age))
  }

  function removePupil(id){
      dispatch(removeAction(id))
  }
  return (
    <Context.Provider
      value={{ state, addPupil, removePupil
    }}>
      {children}
    </Context.Provider>
  )
}
