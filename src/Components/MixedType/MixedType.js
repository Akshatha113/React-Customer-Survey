import React from 'react';
import './MixedType.scss';

const MixedType=({ qno, data, id, isEdit = false, onUpdate})=> { 
   
    const onFieldUpdate = (field,value) => {
        let tempData = { ...data };
        tempData[field]=value;
        onUpdate(id,tempData);
    }
    
    const renderButton = data.options.map((option, index) => {
        return (
            <div className="mixed" key={index}>
                 <input type="radio" value={option} checked={data.tab===option} onChange={()=>onFieldUpdate("tab",option)} className="radio-check">
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
                    {!isEdit && <input type="text" className="" value={data.title} onChange={(e)=>onFieldUpdate("title",e.target.value)}/>}
                </h5>
                <div className="" role="group" aria-label="Basic outlined example">
                    <div className="flex-display">{ renderButton}</div>
                    <div className="">
                        <label>Any Comments ?</label>
                        <textarea rows="3" className="form-control" value={data.ans} onChange={(e)=>onFieldUpdate("ans",e.target.value)}></textarea>
                    </div>
                </div>
            </div>
            
        </div>
    );
}  
export default MixedType;