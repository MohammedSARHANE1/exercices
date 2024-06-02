import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true };
    case "deposit150":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return {
        ...state,
        balance: state.balance ? state.balance - 50 : state.balance,
      };

    case "Request":
      return {
        ...state,
        loan: state.loan !== 5000 ? state.loan + 5000 : state.loan,
      };
    case "payLaon":
      if (state.balance >5000) {
        return { ...state,balance: state.balance - 5000, loan: 0 };
      }
      return state;
    case "closeAccount":
      if (state.balance === 0 && state.loan === 0) {
        return {balance: 0, loan: 0, isActive: false };
      }
      return state;
    default:
      return state;
  }
}

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      {state.isActive && <p>Balance: {state.balance}</p>}
      {state.isActive && <p>Loan: {state.loan}</p>}
      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={state.isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit150" });
          }}
          disabled={!state.isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={!state.isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "Request" });
          }}
          disabled={!state.isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLaon" });
          }}
          disabled={!state.isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={!state.isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
