import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <h1>Menghitung : {count}</h1>
      <button onClick={handleCount}>Mengubah nilai</button>
    </div>
  );
}

export default App;
