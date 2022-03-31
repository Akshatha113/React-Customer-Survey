import React, {useState} from 'react';
import './ActionCard.scss';

const ActionCard = ({ isEdit = false, isDelete = false, id, onSave = () => { }, onDelete = () => { }, onEdit = () => { }, ...props}) => {

    const [saveFlag, setSaveFlag] = useState(false);
    return (
        <div className="card">
            <div className="card-header">
                <div className="float-end">
                    {isEdit && <i className="fa fa-pencil edit ml-2 fs-24"  
                        onClick={() => {onEdit(id); setSaveFlag(true)}}></i>}
                    {isDelete && <i className="fa fa-close ml-2 fs-24" 
                        onClick={() => onDelete(id)}></i>}
                </div>
            </div>
            {props.children}
            <div className="card-footer">
                {saveFlag &&
                    <button type="button"
                        className="btn btn-light border float-end"
                        onClick={() => { onSave(id); setSaveFlag(false)}}>Save</button>}
            </div>
        </div>
    );
}
export default ActionCard;