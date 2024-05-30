import { useReducer } from "react";
const intialeValue={count:0,step:1}
function Appcopy() {
  const [state, dispatch] = useReducer(reducer, intialeValue);

  function reducer(state, action) {
   switch (action.type) {
     case "inc":
       return { ...state, count: state.count + state.step };
     case "dec":
       return { ...state, count: state.count - state.step };
     case "setCount":
       return { ...state, count: action.payload };
     case "setStep":
       return { ...state, step: action.payload };
     case "reset":
      return intialeValue;
     default:
       return new Error("unknow value");
   }




    // if (action.type === "inc") return state + 1;
    // if (action.type === "dec") return state - 1;
    // if (action.type === "setCount") return action.payload;
  }
  function handleInc() {
    dispatch({ type: "inc" });
  }
  function handleDec() {
    dispatch({ type: "dec" });
  }
  function handlechange(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }
  function handleSetStep(e){
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }
  function handleReset(){
    dispatch({type:"reset"})
  }
  return (
    <div className="App">
      <p>
        <input type="range"  value={state.step} onChange={handleSetStep} />
        <span>{state.step}</span>
      </p>
      <p>
        <button onClick={handleDec}>-</button>
        <input value={state.count} onChange={handlechange} />
        <button onClick={handleInc}>+</button>
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Appcopy;
