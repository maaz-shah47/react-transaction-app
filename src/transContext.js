import { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";
const initinialTransactions = [
  { amount: 500, desc: "Cash" },
  { amount: -40, desc: "Book" },
  { amount: -200, desc: "Camera" },
  { amount: 200, desc: "Pen" },
];

export const transactionContext = createContext(initinialTransactions);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initinialTransactions);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }

  return (
    <transactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
};
