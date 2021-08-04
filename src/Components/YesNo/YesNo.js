import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './YesNo.scss';

const YesNo=({ qno, data, id, isEdit = false, onUpdate})=> {

    const onTitleUpdate = (value) => {
        let tempData = { ...data };
        tempData.title = value.target.value;
        onUpdate(id,tempData);
    }
    const onButtonDetailsUpdate = (index, value) => {
        let tempData = {...data};
        tempData.buttons[index]= value;
        console.log(tempData)
        onUpdate(id,tempData);
    }
    const selectTabs = (index, value) => {
        let tempData = {...data};
        tempData.ans = value;
        onUpdate(id,tempData);
    }
    const renderButton = data.buttons.map((button, index) => {
        return (
        <button key={index} type="button"
        // style={{backgroundColor: button===data.ans ? '#00a3ad' : '#F1F4F6' }}
        className={button===data.ans ? "btn bg-grey thumb active" : "btn bg-grey thumb"}
        onClick={()=>selectTabs(index,button)}> 
            <input type="radio" key={index} checked={button===data.ans} onChange={()=>selectTabs(index,button)} 
            className="radio-check"></input>{button}</button>
        );
    });
    const renderInputButton = data.buttons.map((button, index) => {
        return (
            <input type="text" key={index} className="form-control" value={button} onChange={(e) => onButtonDetailsUpdate(index,e.target.value)} />);
    });
    return (
        <div className="card-body flex-display">
            <span className="question font-bold">{qno}.</span>
            <div className="card-box">
                <h5 className="card-title flex-display">
                    {isEdit && <span className="question font-bold">{data.title}</span>}
                    {!isEdit && <input type="text" value={data.title} onChange={onTitleUpdate}/>}
                </h5>
                <div className="thumb btn-group" role="group" aria-label="Basic outlined example">
                    {isEdit && renderButton}
                    {!isEdit && <div className="input-group mb-3"> {renderInputButton}</div>}
                </div>
            </div>
            
        </div>
    );
    // const [inputField, setInputField] = useState({
    //     comp:'YesNoComponent',
    //     qns:'Please enter question',
    //     tabYes: { val: 'Yes', selected: false },
    //     tabNo: { val:'No', selected:false },
       
    // });

    // const [edit, setEdit]=useState(false);

    // const {register, handleSubmit, setValue, getValues, formState:{errors} } = useForm({
    //     defaultValues:inputField
    // });
    
    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data));
    //     setInputField(getValues());
    //     console.log("all",inputField);
    //     setEdit(false);
    //     setSubmit(true);
    // } 
    // let touchtime=0;
    // const edited=()=>{
       
    //     if (touchtime === 0) {
    //         touchtime = new Date().getTime();
    //       } else {
    //         if (new Date().getTime() - touchtime < 400) {
    //             setSubmit(false);
    //             setEdit(true);
    //             touchtime = 0;
    //         } else {
    //             touchtime = new Date().getTime();
    //         }
    //       }
    //       console.log(touchtime)

    // }
    // const [submit, setSubmit]=useState(false);
    // const setSelection=(input) =>{
    //     // edited();
    //     if(submit===true) {
    //         if(input===inputField.tabYes) {
    //             // inputField.tabYes.selected=true;
    //             // inputField.tabNo.selected=false;
    //             setValue("tabYes.selected",true)
    //             setValue("tabNo.selected",false)
    //             console.log("inputs",inputField)
    //         }
    //         else {
    //             // inputField.tabYes.selected=false;
    //             // inputField.tabNo.selected=true;
    //             setValue("tabYes.selected",false)
    //             setValue("tabNo.selected",true)
    //             console.log("inputs",inputField) 
    //         }
    //     setInputField(getValues());
    //     }
    // }
    // return (
    //     <div className="container bg-white">
    //         <div className="ans-box">
    //             <form onSubmit={handleSubmit(onSubmit)}>
    //                 { edit===true && <input type="text" {...register("qns", {required:true})} className="ml-10" 
    //                 // onChange={inputHandlers} placeholder="Please enter question..." value={inputField.qns} required
    //                 ></input> }
    //                 { errors.qns && <p className="error-message">This field is required</p>}
    //                 { edit===false && <p className="question font-bold ml-10" onClick={()=>edited()}>{inputField.qns}</p> }
    //                 <div className="thumb flex-display content-left line">
    //                     <div className="bg-grey" 
    //                     style={{backgroundColor: inputField.tabYes.selected===true && submit===true ? '#00a3ad' : '#F1F4F6' }}>
                        
    //                         <input type="radio" id="yes" className="radio-check" 
    //                          onChange={()=>setSelection(inputField.tabYes)} checked={inputField.tabYes.selected===true && submit===true}
    //                          ></input>
    //                         { edit===true && <input type="text" className="edit" {...register("tabYes.val", {required:true})}
    //                         // value={inputField.tabYes.val} onChange={inputHandlers} required
    //                         ></input> }
    //                         {/* { errors.tabYes && <p>This field is required</p>} */}
    //                         { edit===false && <span className="font-bold" onClick={()=>edited()}>{inputField.tabYes.val}</span> }
                            
    //                     </div>
    //                     <div className="bg-grey" 
    //                     style={{backgroundColor: inputField.tabNo.selected===true && submit===true ? '#00a3ad' : '#F1F4F6' }}>
                        
    //                         <input type="radio" id="no" className="radio-check" 
    //                         onChange={()=>setSelection(inputField.tabNo)}  checked={inputField.tabNo.selected===true && submit===true}
    //                         ></input>
    //                         { edit===true && <input type="text" className="edit" {...register("tabNo.val", {required:true})}
    //                         // value={inputField.tabNo.val} onChange={inputHandlers} required
    //                         ></input> }
    //                         {/* { errors.tabNo.val && <p>This field is required</p>} */}
    //                         { edit===false && <span className="font-bold" onClick={()=>edited()}>{inputField.tabNo.val}</span> }
                            
    //                     </div>
    //                 </div>
    //                 <button type="submit" className="save-tab ml-10">Save</button>
    //             </form>
                
    //         </div>
    //     </div>
    // );
}
export default YesNo;