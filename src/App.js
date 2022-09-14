import './App.css';
import {useState} from "react";
import Child from './components/Child';

function App() {
  const [count, setCount] = useState(0);
  const [countChild, setCountChild] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <h1>Menghitung : {count}</h1>
      <button onClick={handleCount}>Mengubah nilai</button>
      <Child countChild = {countChild} />
    </div>
  );
}

export default App;
