import React from 'react';
import './YesNo.scss';

const YesNo=({ qno, data, id, isEdit = false, onUpdate})=> {

    const onFieldUpdate = (field,value,index) => {
        let tempData = { ...data };
        tempData[field] = value;
        if(field==="BUTTONS"){
            tempData.buttons[index]= value; 
        }
        onUpdate(id,tempData);
    }

    const renderButton = data.buttons.map((button, index) => {
        return (
        <button key={index} type="button"
        // style={{backgroundColor: button===data.ans ? '#00a3ad' : '#F1F4F6' }}
        className={button===data.ans ? "btn bg-grey thumb active" : "btn bg-grey thumb"}
        onClick={()=>onFieldUpdate("ans",button)}> 
            <input type="radio" value={button} checked={button===data.ans} onChange={()=>onFieldUpdate("ans",button)} 
            className="radio-check"></input>{button}</button>
        );
    });
    const renderInputButton = data.buttons.map((button, index) => {
        return (
            <input type="text" key={index} className="form-control" value={button} onChange={(e) => onFieldUpdate("BUTTONS",e.target.value,index)} />);
    });
    return (
        <div className="card-body flex-display">
            <span className="question font-bold">{qno}.</span>
            <div className="card-box">
                <h5 className="card-title flex-display">
                    {isEdit && <span className="question font-bold">{data.title}</span>}
                    {!isEdit && <input type="text" value={data.title} onChange={(e)=>onFieldUpdate("title",e.target.value)}/>}
                </h5>
                <div className="thumb btn-group" role="group" aria-label="Basic outlined example">
                    {isEdit && renderButton}
                    {!isEdit && <div className="input-group mb-3"> {renderInputButton}</div>}
                </div>
            </div>
            
        </div>
    );  
}
export default YesNo;