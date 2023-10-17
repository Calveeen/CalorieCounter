import {useState, useEffect} from "react"
import CalorieForm from "./CalorieForm"

export default function CalorieInformation({modalActive, setModalActive, entries, setEntries}){
  const resetInfo = {food: "", calories: "", time: ""}

  const [calorieInfo, setCalorieInfo] = useState({
      food: "",
      calories: "",
      time: ""
  })

  const [submitClicked, setSubmitClicked] = useState(false)

  const [validInput, setValidInput] = useState({
    food: false,
    calories: false,
    time: false
  })

  
  const handleChange = e =>{
    const id = e.target.id;
    const val = e.target.value
    setCalorieInfo((prevCalorieInfo) => ({
      ...prevCalorieInfo,
      [id]: val
    }));
  }

  const handleClear = () =>{
    setCalorieInfo(resetInfo);
  }

  const handleExit = () =>{
    setCalorieInfo(resetInfo)
    setModalActive(false)
  }

  const handleSubmit = () =>{
    setSubmitClicked(true)
    console.log(validInput)
    if(validInput.food === true && validInput.calories === true && validInput.time === true){
      setEntries([...entries, calorieInfo])
      setModalActive(false)
      setCalorieInfo(resetInfo)
    }
  }

  useEffect(() =>{
      for(let key in calorieInfo){
        if(calorieInfo[key] === ""){
          setValidInput((prevValidInput) =>({
            ...prevValidInput,
            [key]: false
          }))
        } else{
          setValidInput((prevValidInput) =>({
            ...prevValidInput,
            [key]: true
          }))
        }
      }
    
  }, [calorieInfo])

  /*Whenever user exits out modal, 
  it will reset the form validation on change until submit is clicked again*/
  if(modalActive === false){
    setCalorieInfo(resetInfo)
    setSubmitClicked(false)
  }

  return (
    <CalorieForm
        calorieInfo={calorieInfo}
        handleChange={handleChange}
        handleClear={handleClear}
        handleExit={handleExit}
        handleSubmit={handleSubmit}
        validInput={validInput}
    />
  )
}