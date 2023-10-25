export default function DisplayDate({date}){
    const splitDate = date.split("-")
    const months = ["Jan","Feb","Mar","Apr","May","June","July",
    "Aug","Sept","Oct","Nov","Dec"]
    const year = splitDate[0]
    const month = months[splitDate[1] - 1]
    const day = splitDate[2]

    return(
        <div className="date-block">
            <span>{month}/{day}/{year}</span>
        </div>
    )
}