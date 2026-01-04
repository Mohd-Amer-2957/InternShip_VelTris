import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  IncreaseByValue,
  reset,
} from "./Store/CounterSlicer";
import { useState } from "react";


const App = () => {
  const dispatch = useDispatch();                            // to dispatch actions  like increament, decreament etc..,
  const count = useSelector((state) => state.counter.value); // to get the value from the store (to display in UI)

  const [Num, SetNum] = useState(0);

  return (
    <>
      <div>
        <center>
          <h1>Redux ToolKit Example Counter</h1>

          <h1>{count}</h1>   
          <button onClick={() => dispatch(increament())}>Increament</button>
          <button onClick={() => dispatch(decreament())}>Decreament</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
          <br />

          <input
            type="number"
            name="Enter value"
            value={Num}
            onChange={(e) => {
              SetNum(Number(e.target.value));
            }}
          />

          <button
            type="submit"
            onClick={() => {
              dispatch(IncreaseByValue(Num));
              SetNum(0);
            }}
          >
            Increase By Value
          </button>
        </center>
      </div>
    </>
  );
};

export default App;
