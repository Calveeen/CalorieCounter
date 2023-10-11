import './App.css';
import CalorieInformation from './components/CalorieInfo/CalorieInformation';
import PlusBtn from './components/PlusBtn/PlusBtn';

function App() {
  return (
    <div className="App">
      <div className="add-date">
        <PlusBtn />
      </div>
      {/* <CalorieInformation /> */}
    </div>
  );
}

export default App;