import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./PlusBtn.css"

export default function PlusBtn(){
    return (
        <button className="add-btn">
            <FontAwesomeIcon icon={faPlus} size="lg" /> Add Date
        </button>
    )
}