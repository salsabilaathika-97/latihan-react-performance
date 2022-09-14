import './App.css';
import React, {useState, useCallback, useMemo} from "react";
const Child = React.lazy(() => import ('./components/Child'));
const Son = React.lazy(() => import ('./components/Son'));

function App() {
  const [count, setCount] = useState(0);
  const [countChild, setCountChild] = useState(0);
  const [data, setData] = useState(['Ayato', 'Childe', 'Zhongli']);
  
  const handleCount = () => {
    setCount(count + 1);
  }

  const handleAnak = () => {
    setCountChild((data) => data + 1);  
  }

  const memoHandleAnak = useCallback(() => handleAnak(), []);

  const lengthData = () => {
    console.log("Ini fungsi lengthData");
    return data.length;
  };

  const memoLength = useMemo(() => lengthData(), [data]);

  const handleData = () => {
    setData(['Itto', 'Kaeya', 'Diluc', 'Thoma'])
  }

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <h1>Menghitung : {count}</h1>
      <button onClick={handleCount}>Mengubah nilai</button>
      <Child handleAnak={memoHandleAnak} countChild = {countChild} />
      <Son />
      <h1>{memoLength}</h1>
      <button onClick={handleData}>Mengubah data</button>
    </div>
  );
}

export default App;
