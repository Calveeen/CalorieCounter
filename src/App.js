import {useState} from "react";
import './App.css';
import CalorieInformation from './components/CalorieInfo/CalorieInformation';
import CalorieModal from './components/CalorieModal/CalorieModal';
import BgBlackout from "./components/BgBlackout/BgBlackout";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <div className="add-date">
        <CalorieModal modalActive={modalActive} setModalActive={setModalActive} />
      </div>

      {modalActive && <BgBlackout setModalActive={setModalActive} />}

      <div className="modal">
        {modalActive && <CalorieInformation setModalActive={setModalActive} />}
      </div>

      
    </div>
  );
}

export default App;