import {useState} from "react"
import AddBtn from "./AddBtn"
import DateForm from "./DateForm"
import DisplayDate from "./DisplayDate"

export default function AddDate(){
    const [addBtnClicked, setAddBtnClicked] = useState(false)
    const [enterBtnClicked, setEnterBtnClicked] = useState(false)
    const [dates, setDates] = useState([])

    return(
        <div className="add-date">
            {addBtnClicked ? 
                <DateForm 
                setAddBtnClicked={setAddBtnClicked}
                setEnterBtnClicked={setEnterBtnClicked}
                dates={dates}
                setDates={setDates} />:
                <AddBtn 
                setAddBtnClicked={setAddBtnClicked}
                setEnterBtnClicked={setEnterBtnClicked}
                />
            }
            <div className="display-dates">
                {dates.map((date, index) => {
                    return <DisplayDate key={date.id} date={date} />
                })}
            </div>
        </div>
    )
}