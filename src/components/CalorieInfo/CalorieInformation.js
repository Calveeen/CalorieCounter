import {useState} from "react"
import CalorieForm from "./CalorieForm"

export default function CalorieInformation({setModalActive, entries, setEntries}){
    const [calorieInfo, setCalorieInfo] = useState({
        food: "",
        calories: "",
        time: ""
      });
    
      const handleChange = e =>{
        const id = e.target.id;
        const val = e.target.value
        setCalorieInfo({...calorieInfo, [id]: val});
      }
    
      const handleClear = () =>{
        const resetInfo = {food: "", calories: "", time: ""}
        setCalorieInfo(resetInfo);
      }

      const handleExit = () =>{
        setModalActive(false)
    }

      const handleSubmit = () =>{
        
        setEntries([...entries, calorieInfo])
        setModalActive(false)
      }

      return (
        <CalorieForm
            calorieInfo={calorieInfo}
            handleChange={handleChange}
            handleClear={handleClear}
            handleExit={handleExit}
            handleSubmit={handleSubmit}
        />
      )
}