import React from "react";
import './RadioItem.scss';

const RadioItem = ({list,labels,onItemSelect}) => {
    console.log("RadioItem :: ",list,labels,onItemSelect );
    const renderRadioItems = list.map((option,index) => {
        const radioItems = labels.map((label) => {
            return (
            <label className="grid-item" key={`${label}${option.name}`}>
                <input type="radio" value={label}  onChange={(e) => onItemSelect(e.target.value,index)} checked={option.value == label}/>
            </label>
            );
        });

        return (
            <React.Fragment key={option.name}>
                <div className="grid-container" >
                    <label className="grid-item">
                        {option.name}
                    </label>
                    {radioItems}
                </div>
            </React.Fragment>
        );
    })
    return (
        <React.Fragment>
            {renderRadioItems}
        </React.Fragment>
        
    );
}

export default RadioItem;