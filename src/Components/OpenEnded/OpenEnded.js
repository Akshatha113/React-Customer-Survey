import React from 'react'; 
import './OpenEnded.scss';

const OpenEnded=({ qno, data, id, isEdit = false, onUpdate})=> { 
    
    const onFieldUpdate = (field,value) => {
        let tempData = { ...data };
        tempData[field] = value;
        onUpdate(id,tempData);
    }

    const renderButton = data.buttons.map((button, index) => {
        return (<button key={index} type="button"  
        className={data.ansType===button ? "btns bg-grey active": "btns bg-grey"}
        onClick={()=>onFieldUpdate("ansType",button)}> 
        {button} Text</button>);
    });
    return (
        <div className="card-body flex-display">
            <span className="question font-bold">{qno}.</span>
            <div className="card-box">
                <h5 className="card-title flex-display">
                    {isEdit && <span className="question font-bold">{data.title}</span>}
                    {!isEdit && <input type="text" value={data.title} onChange={(e)=>onFieldUpdate("title",e.target.value)}/>}
                </h5>
                <div className="" role="group" aria-label="Basic outlined example">
                    <div className="flex-display text-btns float-end">{renderButton}</div>
                    <div className="input-box">
                        {data.ansType==='Short' && <input type="text"
                        className="form-control" value={data.ans} onChange={(e)=>onFieldUpdate("ans",e.target.value)}></input> }
                        {data.ansType==='Long' && <textarea rows="3" 
                        className="form-control" value={data.ans} onChange={(e)=>onFieldUpdate("ans",e.target.value)}></textarea> }   
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default OpenEnded;