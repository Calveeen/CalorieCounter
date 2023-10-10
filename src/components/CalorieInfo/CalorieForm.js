import "./CalorieForm.css"

export default function GetInfo({calorieInfo, handleChange, handleClear}){
    return(
        <div className="get-inputs">
            <div className="food input-field">
                <label for="food">Food Item</label>
                <input 
                    type="text" 
                    id="food" 
                    name="food" 
                    onChange={handleChange}
                    value={calorieInfo.food}
                />
            </div>
            <div className="calories input-field">
                <label for="calories">Calories</label>
                <input 
                    type="text" 
                    id="calories" 
                    name="calories" 
                    onChange={handleChange}
                    value={calorieInfo.calories}
                />
            </div>
            <div className="time input-field">
                <label for="time">Time</label>
                <input
                    type="text" 
                    id="time" 
                    name="time" 
                    onChange={handleChange}
                    value={calorieInfo.time}
                />
            </div>
            <div className="submit-clear">
                <button className="clear" onClick={handleClear}>Clear</button>
                <button className="submit">Submit</button>
            </div>
        </div>
    )
}