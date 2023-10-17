import "./DisplayEntries.css"
export default function DisplayEntries({entry}){
    return (
        <div className="entry">
            <span className="food">{entry.food}</span>
            <span className="calories">{entry.calories} Cals</span>
            <span className="time">{entry.time}</span>
        </div>
    )
}