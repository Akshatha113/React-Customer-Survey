import React from 'react';
import './MixedType.scss';

const MixedType=({ qno, data, id, isEdit = false, onUpdate})=> { 
    const options = ['Very satisfied','Satisfied', 'Neutral', 'Dissatisfied','Very dissatisfied'];
    const onFieldUpdate = (field,value,index) => {
        let tempData = { ...data };
        if(field==="TITLE"){
            tempData.title = value; 
        }
        if(field==="COMMENTS"){
            tempData.ans= value; 
        }
        if(field==="OPTION"){
            tempData.tab = value;
        }
        onUpdate(id,tempData);
    }
    
    const renderButton = options.map((option, index) => {
        return (
            <div className="mixed" key={index}>
                 <input type="radio" value={option} checked={data.tab===option} onChange={()=>onFieldUpdate("OPTION",option)} className="radio-check">
                </input><span className="optionName">{option}</span>
            </div> 
        );
    });
    
    return (
        <div className="card-body flex-display">
            <span className="question font-bold">{qno}.</span>
            <div className="card-box">
                <h5 className="card-title">
                    {isEdit && <span className="question font-bold">{data.title}</span>}
                    {!isEdit && <input type="text" className="" value={data.title} onChange={(e)=>onFieldUpdate("TITLE",e.target.value)}/>}
                </h5>
                <div className="" role="group" aria-label="Basic outlined example">
                    <div className="flex-display">{ renderButton}</div>
                    <div className="">
                        <label>Any Comments ?</label>
                        <textarea rows="3" className="form-control" value={data.ans} onChange={(e)=>onFieldUpdate("COMMENTS",e.target.value)}></textarea>
                    </div>
                </div>
            </div>
            
        </div>
    );
}  
export default MixedType;