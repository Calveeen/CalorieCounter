import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./CalorieModal.css"

export default function PlusBtn({modalActive, setModalActive}){
    const handleClick = () =>{
        setModalActive(true);
    }
    return (
        <button className="add-entry" onClick={handleClick}>
            <FontAwesomeIcon icon={faPlus} size="lg" /> Add Entry
        </button>
    )
}