import {useState} from "react"
import "./AddDate.css"

export default function DateForm({setAddBtnClicked, setEnterBtnClicked, dates, setDates}){
   

    const [currentDateInput, setCurrentDateInput] = useState("")

    const handleEnterClick = () =>{
        if(currentDateInput !== ""){
            if(!dates.includes(currentDateInput)){
                setDates((prevDate) => {
                    console.log([...prevDate, currentDateInput])
                    return [...prevDate, currentDateInput]
                })
            }
            
            setAddBtnClicked(false)
            setEnterBtnClicked(true)
        }
        
    }

    const handleCancelClick = () =>{
        setAddBtnClicked(false)
    }

    const handleChange = (e) =>{
        const currentDate = e.target.value
        setCurrentDateInput(currentDate)
    }

    

    return (
        <div className="date-form">
            <div className="date-entry">
                <label for="date">Enter Date</label>
                <input
                    type="date" 
                    id="date" 
                    name="date" 
                    onChange={handleChange}
                    min="2000-01-01"
                    max="3000-12-31"
                ></input>
            </div>
            <div className="enter-cancel">
                <button className="date-cancel" onClick={handleCancelClick}>
                    Cancel
                </button>
                <button className="date-enter" onClick={handleEnterClick}>
                    Enter
                </button>
            </div>
        </div>
    )
}