import { useState } from "react";
import { Addition } from "./Components/Addition";
import { Subraction } from "./Components/Subraction";

const App = () => {
  const [num1, SetNum1] = useState();
    const [num2, SetNum2] = useState();

  const [number1, SetNumber1] = useState(0);
    const [number2, SetNumber2] = useState(0);


  const onChangeHandle = (e) => {
    console.log(e.target.value);

    SetNum(Number(e.target.value));
  };
  const handleSubmit = () => {
    
    console.log("calling submit");
    SetNumber1(num1)
    SetNumber2(num2)
    SetNum1(0);
    SetNum2(0);
  };

  return (
    <div>
      <h1>App</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => SetNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => SetNum2(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <Addition num1={Number(number1)} num2={Number(number2)} />
      <Subraction num1={Number(number1)} num2={Number(number2)} />
    </div>
  );
};

export default App;
