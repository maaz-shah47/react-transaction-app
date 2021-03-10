import React, { useContext, useState } from "react";
import { transactionContext } from "./transContext";

function Child() {
  let { transactions, addTransaction } = useContext(transactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
  };

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount;
      }
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += transactions[i].amount;
      }
    }
    return expense;
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>

      <h3>
        Your Balance <br />
        {getIncome() + getExpense()}
      </h3>

      <div className="income-container">
        <h3>
          INCOME <br />
          <span style={{ color: "#81B622" }}>{getIncome()}</span>
        </h3>
        <h3>
          EXPENSE <br />
          <span style={{ color: "red" }}>{getExpense()}</span>
        </h3>
      </div>

      <h3>History </h3>
      <hr />

      <ul className="transaction-list">
        {transactions.map((transObj, ind) => {
          return (
            <li>
              <span>{transObj.desc}</span>
              <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>

      <h3>Add new transaction</h3>
      <hr />
      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input
            type="text"
            onChange={(ev) => setDesc(ev.target.value)}
            required
          ></input>
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input
            type="number"
            onChange={(ev) => setAmount(ev.target.value)}
            required
          ></input>
        </label>
        <br />
        <input
          className="submit-btn"
          type="submit"
          value="Add Transaction"
        ></input>
      </form>
    </div>
  );
}

export default Child;
