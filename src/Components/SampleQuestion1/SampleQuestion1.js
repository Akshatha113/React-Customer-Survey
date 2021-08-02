import React, {useState} from "react";

const SampleQuestion1 = ({ qno, data, id, isEdit = false, onUpdate}) => {

    const onTitleUpdate = (value) => {
        let tempData = { ...data };
        tempData.title = value.target.value;
        onUpdate(id,tempData);
    }
    const onButtonDetailsUpdate = (index, value) => {
        let tempData = {...data};
        tempData.buttons[index]= value;
        onUpdate(id,tempData);
    }
    const renderButton = data.buttons.map((button, index) => {
        return (<button key={index} type="button" className="btn btn-outline-primary" style={{minWidth:'100px'}}>{button}</button>);
    });
    const renderInputButton = data.buttons.map((button, index) => {
        return (
            <input type="text" key={index} className="form-control" value={button} onChange={(e) => onButtonDetailsUpdate(index,e.target.value)} />);
    });
    return (
        <div className="card-body">
            <h5 className="card-title">{qno}.
                {isEdit && <span>{data.title}</span>}
                {!isEdit && <input type="text" value={data.title} onChange={onTitleUpdate}/>}
            </h5>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                {isEdit && renderButton}
                {!isEdit && <div className="input-group mb-3"> {renderInputButton}</div>}
            </div>
        </div>
    );
}
export default SampleQuestion1;