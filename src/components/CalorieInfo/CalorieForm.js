import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./CalorieForm.css"

export default function GetInfo({
    calorieInfo, 
    handleChange, 
    handleClear, 
    handleExit,
    handleSubmit
}){
    return(
        <div className="get-inputs">
            <div className="exit">
                <button className="x-btn" onClick={handleExit}>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
            </div>
            <div className="input-field">
                <label for="food">Food Item</label>
                <input 
                    type="text" 
                    id="food" 
                    name="food" 
                    onChange={handleChange}
                    value={calorieInfo.food}
                    autoComplete="off"
                />

            </div>
            <div className="input-field">
                <label for="calories">Calories</label>
                <input 
                    type="text" 
                    id="calories" 
                    name="calories" 
                    onChange={handleChange}
                    value={calorieInfo.calories}
                    autoComplete="off"
                />
            </div>
            <div className="input-field">
                <label for="time">Time</label>
                <input
                    type="text" 
                    id="time" 
                    name="time" 
                    onChange={handleChange}
                    value={calorieInfo.time}
                    autoComplete="off"
                />
            </div>
            <div className="submit-clear">
                <button className="clear" onClick={handleClear}>Clear</button>
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}