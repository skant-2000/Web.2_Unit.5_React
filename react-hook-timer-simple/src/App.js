import './App.css';
import Timer from './component/Timer';

function App() {

  const initialTime = 0
  const endTime = 10

  return (
    <div className="App">
      <Timer initialTime={initialTime} endTime={endTime} />
    </div>
  );
}

export default App;
