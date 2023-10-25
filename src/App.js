import {useState} from "react"
import './App.css'
import AddDate from "./components/AddDate/AddDate"
import CalorieInformation from './components/CalorieInfo/CalorieInformation'
import CalorieModal from './components/CalorieModal/CalorieModal'
import BgBlackout from "./components/BgBlackout/BgBlackout"
import DisplayEntries from "./components/DisplayEntries/DisplayEntries"

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [entryInfo, setEntryInfo] = useState([])

  return (
    <div className="App">
      {/*Modal popup after clicking add date button*/}
      <div className="date-toggle">
        <AddDate />
      </div>

      {/*toggle background blackout*/}
      {modalActive && <BgBlackout setModalActive={setModalActive} />}

      {/*toggle modal popup*/}
      <div className="modal">
        {modalActive && 
          <CalorieInformation
            modalActive={modalActive} 
            setModalActive={setModalActive}
            entryInfo={entryInfo} 
            setEntryInfo={setEntryInfo}
          />
        }
      </div>

      {/*Show results on page */}
      {entryInfo.length !== 0 ?
        entryInfo.map(entryInfo => (
          <DisplayEntries key={entryInfo.time} entryInfo={entryInfo}/>
        )) : ""
      }
    </div>
  );
}

export default App;