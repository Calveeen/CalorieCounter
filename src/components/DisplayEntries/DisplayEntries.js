import "./DisplayEntries.css"
export default function DisplayEntries({entryInfo}){
    return (
        <div className="display-info">
            <span className="food">{entryInfo.food}</span>
            <span className="calories">{entryInfo.calories} Cals</span>
            <span className="time">{entryInfo.time}</span>
        </div>
    )
}