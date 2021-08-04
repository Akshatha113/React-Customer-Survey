import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './OpenEnded.scss';

const OpenEnded=({ qno, data, id, isEdit = false, onUpdate})=> { 
    
    const onTitleUpdate = (value) => {
        let tempData = { ...data };
        tempData.title = value.target.value;
        onUpdate(id,tempData);
    }
    const onButtonDetailsUpdate = (value) => {
        let tempData = {...data};
        tempData.ans= value.target.value;
        onUpdate(id,tempData);
    }
    const selectTabs = (index, value) => {
        let tempData = {...data};
        tempData.ansType = value;
        onUpdate(id,tempData);
    }
    const renderButton = data.buttons.map((button, index) => {
        return (<button key={index} type="button"  
        className={data.ansType===button ? "btns bg-grey": "btns edit"}
        onClick={()=>selectTabs(index,button)}> 
        {button} Text</button>);
    });
    return (
        <div className="card-body flex-display">
            <span className="question font-bold">{qno}.</span>
            <div className="card-box">
                <h5 className="card-title flex-display">
                    {isEdit && <span className="question font-bold">{data.title}</span>}
                    {!isEdit && <input type="text" value={data.title} onChange={onTitleUpdate}/>}
                </h5>
                <div className="" role="group" aria-label="Basic outlined example">
                    <div className="flex-display text-btns">{renderButton}</div>
                    <div className="input-box">
                        {data.ansType==='Short' && <input type="text" placeholder="Please type here..."
                        className="form-control" value={data.ans} onChange={onButtonDetailsUpdate}></input> }
                        {data.ansType==='Long' && <textarea rows="3" 
                        className="form-control" value={data.ans} onChange={onButtonDetailsUpdate}></textarea> }   
                    </div>
                </div>
            </div>
        </div>
    );
    // const [inputFieldOpenEnded, setInputFieldOpenEnded] = useState({
    //     comp:'YesNoComponent',
    //     qns:'Please enter question',
    //     ansType:'short',
    //     ans:''
    // });

    // const [editOpenEnded, setEditOpenEnded]=useState(false);

    // const {register, handleSubmit, setValue, getValues, formState:{errors} } = useForm({
    //     defaultValues:inputFieldOpenEnded
    // });
   
    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data));
    //     setInputFieldOpenEnded(getValues());
    //     console.log("open",inputFieldOpenEnded);
    //     setEditOpenEnded(false);   
    // } 
   
    // const selectTabs = (tab) => {
        
    //     if(tab==="long"){
    //         // inputFieldOpenEnded.ansType='long';
    //         setValue('ansType','long');
    //     } else {
    //         // inputFieldOpenEnded.ansType='short';
    //         setValue('ansType','short');
    //     }
    //     setInputFieldOpenEnded(getValues());
        
    // }
    
    // return(
    //     <div className="container bg-white">
    //         <div className="ans-box">
    //             <form onSubmit={handleSubmit(onSubmit)}>
    //                 { editOpenEnded===true && <input type="text" {...register("qns", {required:true})} className="input-field ml-10" 
    //                 // onChange={inputHandlers} placeholder="Please enter question..." value={inputField.qns} required
    //                 ></input> }
    //                 { errors.qns && <p className="error-message">This field is required</p>}
    //                 { editOpenEnded===false && <p className="question font-bold ml-10" onClick={()=>setEditOpenEnded(true)}>{inputFieldOpenEnded.qns}</p> }
    //                 <div className="flex-display content-left line">
    //                     <div className="text-btns">
    //                         <button type="button" onClick={()=>selectTabs("long")} 
    //                         // style={{border: inputFieldOpenEnded.ansType==="long" ? '2px solid #00a3ad' : '' }} 
    //                         className={inputFieldOpenEnded.ansType==="long" ? "active": "edit"}>Long Text</button>
    //                         <button type="button" onClick={()=>selectTabs("short")} 
    //                         // style={{border: inputFieldOpenEnded.ansType==="short" ? '2px solid #00a3ad' : '' }} 
    //                         className={inputFieldOpenEnded.ansType==="short" ? "active" : "edit"}>Short Text</button>
    //                     </div>
    //                     <div className="input-box">
    //                         { inputFieldOpenEnded.ansType==='short' && <input type="text" placeholder="Please type here..."
    //                         {...register("ans", {required:true})} className="ml-10"></input> }
    //                         { inputFieldOpenEnded.ansType==='long' && <textarea rows="3" {...register("ans", {required:true})} className="ml-10"></textarea> }
    //                     </div>
    //                 </div>
    //                 <button type="submit" className="save-tab ml-10">Save</button>
    //             </form>
                
    //         </div>
    //     </div>
    // );
}

export default OpenEnded;