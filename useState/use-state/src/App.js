import logo from "./logo.svg";
import { useState } from "react";
// function countInitial() {
//   console.log("run function");
//   return 4;
// }
function App() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const { count, theme } = state;
  function decrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
