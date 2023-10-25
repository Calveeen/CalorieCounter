import "./AddDate.css"

export default function AddBtn({setAddBtnClicked, setEnterBtnClicked}){
    const handleClick = () =>{
        setAddBtnClicked(true)
        setEnterBtnClicked(false)
    }
    return(
        <button className="add-btn" onClick={handleClick}>
            Add Date
        </button>
    )
}