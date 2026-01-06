import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
const [count,setCount] = useState(0);


  return (
    <div className="app">
      React Introduce
      <Button name="plus" btnClick={()=>setCount((prev)=>prev+1)}/>
      <Button name="minus" btnClick={()=>setCount((prev)=>prev-1)}/>
      <div>{count}</div>
    </div>
  );
}

export default App;
