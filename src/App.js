import './App.css';
import {useState, useCallback} from "react";
import Child from './components/Child';
import Son from './components/Son';

function App() {
  const [count, setCount] = useState(0);
  const [countChild, setCountChild] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  }

  const handleAnak = () => {
    setCountChild((data) => data + 1);  
  }

  const memoHandleAnak = useCallback(() => handleAnak(), []);

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <h1>Menghitung : {count}</h1>
      <button onClick={handleCount}>Mengubah nilai</button>
      <Child handleAnak={memoHandleAnak} countChild = {countChild} />
      <Son />
    </div>
  );
}

export default App;
