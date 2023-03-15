import React, { useContext, createContext, useReducer } from "react";

export const ContextApi = createContext();

export const Provider = ({ Reducer, initialState, children }) => (
  <ContextApi.Provider value={useReducer(Reducer, initialState)}>
    {children}
  </ContextApi.Provider>
);

export const StateValue = () => useContext(ContextApi);
