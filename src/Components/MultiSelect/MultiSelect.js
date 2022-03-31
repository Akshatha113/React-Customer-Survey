import React, {useRef} from 'react';
import './MultiSelect.scss';

const MultiSelect=({ qno, data, id, isEdit = false, onUpdate})=> { 

    const onFieldUpdate = (field,value,index) => {
        let tempData = { ...data };
        // tempData[field] = value;
        if(field==="TITLE"){
            tempData.title = value; 
        }
        if(field==="TAB"){
            tempData.tabs[index].value = value;
        }
        onUpdate(id,tempData);
    }
    
    const onFileChanged=(index) =>{
        let tempData = { ...data };
        tempData.tabs[index].selected = !tempData.tabs[index].selected;
        onUpdate(id,tempData);
    }
    const inputElement=useRef([]);
    const deleteRow=(index) => {
        let tempData = {...data};
        tempData.tabs.splice(index,1);
        console.log(tempData);
        onUpdate(id,tempData);
    }
    const addTable=() => {
        let tempData = {...data};
        const obj =  { id:'', value:'',name:'',selected:false};
        tempData.tabs.push(obj);
        console.log(tempData);
        onUpdate(id,tempData);
    }
    const renderButton = data.tabs.map((tab, index) => {
        return (
            <div style={{marginBottom:"10px"}} key={index}>
                <button value={tab.value} className={tab.selected ? "btn bg-grey tab active" : "btn tab bg-grey"}
                onClick={()=>onFileChanged(index)} >{tab.value}</button>
                <button onClick={()=>deleteRow(index)} className="delete-tab"><i className="fa fa-trash-o"></i></button>
            </div> 
        );
    });
    const renderImages = data.tabs.map((tab, index) => {
        return (
            // <div key={index} className={tab.selected===true ? "img-tab active" : "img-tab"} onClick={()=>onFieldUpdate("SELECTED",tab,index)}> 
            //     <button value={tab.value}>{tab.value}</button>
            // </div>
            <input type="text" key={index} className="form-control" value={tab.value} onChange={(e) => onFieldUpdate("TAB",e.target.value,index)} />
        )   
    });
    return (
        <div className="card-body flex-display">
            <span className="question font-bold">{qno}.</span>
            <div className="card-box">
                <h5 className="card-title">
                    {isEdit && <span className="question font-bold">{data.title}</span>}
                    {!isEdit && <input type="text" className="form-control" value={data.title} onChange={(e)=>onFieldUpdate("TITLE",e.target.value)}/>}
                </h5>
                <div className="" role="group" aria-label="Basic outlined example">
                    { isEdit && <div className="flex-display">{renderButton}</div> }
                    { !isEdit && <div className="flex-display">{ renderImages}</div> }
                    { !isEdit && <button onClick={()=>addTable()} className="add-tab"><i className="fa fa-plus"></i></button> }
                        
                </div>
            </div>
            
        </div>
    );
}  
export default MultiSelect;