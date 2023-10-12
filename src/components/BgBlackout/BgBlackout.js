import "./BgBlackout.css"

export default function BgBlackout({setModalActive}){
    const handleClick = () =>{
        setModalActive(false);
    }
    return (
        <div className="modal-active" onClick={handleClick}>

        </div>
    )
}