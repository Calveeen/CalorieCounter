import {useState} from "react"
import './App.css'
import CalorieInformation from './components/CalorieInfo/CalorieInformation'
import CalorieModal from './components/CalorieModal/CalorieModal'
import BgBlackout from "./components/BgBlackout/BgBlackout"
import DisplayEntries from "./components/DisplayEntries/DisplayEntries"

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [entries, setEntries] = useState([])

  return (
    <div className="App">
      {/*Modal popup after clicking add date button*/}
      <div className="add-date">
        <CalorieModal modalActive={modalActive} setModalActive={setModalActive} />
      </div>

      {/*toggle background blackout*/}
      {modalActive && <BgBlackout setModalActive={setModalActive} />}

      {/*toggle modal popup*/}
      <div className="modal">
        {modalActive && 
          <CalorieInformation
            modalActive={modalActive} 
            setModalActive={setModalActive}
            entries={entries} 
            setEntries={setEntries}
          />
        }
      </div>

      <div className="display-info">
        {entries.length !== 0 ?
          entries.map(entry => (
            <DisplayEntries key={entry.time} entry={entry}/>
          )) : ""
        }
      </div>
    </div>
  );
}

export default App;