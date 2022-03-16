import React, {useRef} from 'react';
import './ImageChoice.scss';

const ImageChoice=({ qno, data, id, isEdit = false, onUpdate})=> { 

    const onFieldUpdate = (field,value,index) => {
        let tempData = { ...data };
        if(field==="TITLE"){
            tempData.title = value; 
        }
        if(field==="SELECTED"){
            tempData.tabs[index].selected = !tempData.tabs[index].selected;
        }
        onUpdate(id,tempData);
    }
    
    const onFileChanged=(event,index) =>{
        if(event.target.files && event.target.files[0]){
          var mount = event.target.files.length;
          console.log(event.target.files); 
          for(let i=0; i<mount; i++) {
            let reader = new FileReader();
            console.log(event.target.files[i].name); 
            data.tabs[index].name=event.target.files[i].name;
            reader.readAsDataURL(event.target.files[i]);
            reader.onload = (event) => {
            data.tabs[index].value=event.target.result;
            }
          }
        }
        onUpdate(id,data);
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
            <div className="flex-display mb-10"  key={index}>
                <input type="file" ref={e=>inputElement.current[index]=e} style={{display:"none"}} onChange={(e)=>onFileChanged(e,index)} ></input>
                <input type="text" className="input-field file-name" disabled value={tab.name} placeholder="Upload File"></input>
                   
                <button type="button"  onClick={()=>inputElement.current[index].click()} className="browse btn btn-primary">Browse</button>
                <button onClick={()=>deleteRow(index)} className="delete-tab"><i className="fa fa-trash-o"></i></button>
            </div> 
        );
    });
    const renderImages = data.tabs.map((tab, index) => {
        return (
            <div key={index} className={tab.selected===true ? "img-tab active" : "img-tab"} onClick={()=>onFieldUpdate("SELECTED",tab,index)}> 
                <img src={tab.value} alt="image"></img>
            </div>
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
                    { !isEdit && renderButton}
                    { !isEdit && <button onClick={()=>addTable()} className="add-tab"><i className="fa fa-plus"></i></button> }
                    { isEdit && <div className="flex-display">{ renderImages}</div> }    
                </div>
            </div>
            
        </div>
    );
}  
export default ImageChoice;