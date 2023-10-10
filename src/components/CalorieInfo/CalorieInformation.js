import {useState} from "react"
import CalorieForm from "./CalorieForm"

export default function CalorieInformation(){
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

      return (
        <CalorieForm
            calorieInfo={calorieInfo}
            handleChange={handleChange}
            handleClear={handleClear}
        />
      )
}