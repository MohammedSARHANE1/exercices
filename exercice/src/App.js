import { useState } from "react";
import "./App.css";

export default function App() {
  const [price, setprice] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  const tip=tip1+tip2
  const totalPrice=price+(tip*price)/100
  function handleChange(e) {
    setprice(Number(e.target.value));
  }
  function handleTip1(e){
    setTip1(Number(e.target.value));
  }
  function handleTip2(e) {
    setTip2(Number(e.target.value));
  }
  function handleReset(){
    setTip2(0)
    setTip1(0)
    setprice('')
  }

  return (
    <div className="App">
      <BillPrice handleChange={handleChange} price={price} />
      <ServiceTiP text="How did you like the service?" 
      handleTip={handleTip1}
      tip={tip1} />
      <ServiceTiP
        text="How did you friend like the service? "
        tip={tip2}
        handleTip={handleTip2}
      />
      {price&&<b>
        <p>
          you pay ${totalPrice}({price}+${tip} tip)
        </p>
      </b>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function BillPrice({ handleChange ,price}) {
  return (
    <div className="bill-price">
      <p> how much was the bill?</p>
      <input type="number"  value={price} onChange={(e) => handleChange(e)} />
    </div>
  );
}
function ServiceTiP({ text ,handleTip,tip}) {
  return (
    <div className="bill-price">
      <p>{text}</p>
      <select onChange={(e)=>handleTip(e)} value={tip}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazigh (20%)</option>
      </select>
    </div>
  );
}
