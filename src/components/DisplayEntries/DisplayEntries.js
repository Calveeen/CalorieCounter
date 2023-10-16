import "./DisplayEntries.css"
export default function DisplayEntries({entry}){
    return (
        <div className="entry" key={entry.time}>
            <span className="food">{entry.food}</span>
            <span className="calories">{entry.calories} Cals</span>
            <span className="time">{entry.time}</span>
        </div>
    )
}