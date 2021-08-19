import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './YesNo.scss';

function YesNo() {
    const [inputField, setInputField] = useState({
        comp:'YesNoComponent',
        qns:'Please enter question',
        tabYes: { val: 'Yes', selected: false },
        tabNo: { val:'No', selected:false },
       
    });

    const [edit, setEdit]=useState(false);

    const {register, handleSubmit, setValue, getValues, formState:{errors} } = useForm({
        defaultValues:inputField
    });
    
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        setInputField(getValues());
        console.log("all",inputField);
        setEdit(false);
        setSubmit(true);
    } 
    let touchtime=0;
    const edited=()=>{
       
        if (touchtime === 0) {
            touchtime = new Date().getTime();
          } else {
            if (new Date().getTime() - touchtime < 400) {
                setSubmit(false);
                setEdit(true);
                touchtime = 0;
            } else {
                touchtime = new Date().getTime();
            }
          }
          console.log(touchtime)

    }
    const [submit, setSubmit]=useState(false);
    const setSelection=(input) =>{
        // edited();
        if(submit===true) {
            if(input===inputField.tabYes) {
                // inputField.tabYes.selected=true;
                // inputField.tabNo.selected=false;
                setValue("tabYes.selected",true)
                setValue("tabNo.selected",false)
                console.log("inputs",inputField)
            }
            else {
                // inputField.tabYes.selected=false;
                // inputField.tabNo.selected=true;
                setValue("tabYes.selected",false)
                setValue("tabNo.selected",true)
                console.log("inputs",inputField) 
            }
        setInputField(getValues());
        }
    }
    return (
        <div className="container bg-white">
            <div className="ans-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    { edit===true && <input type="text" {...register("qns", {required:true})} className="ml-10" 
                    // onChange={inputHandlers} placeholder="Please enter question..." value={inputField.qns} required
                    ></input> }
                    { errors.qns && <p className="error-message">This field is required</p>}
                    { edit===false && <p className="question font-bold ml-10" onClick={()=>edited()}>{inputField.qns}</p> }
                    <div className="thumb flex-display content-left line">
                        <div className="bg-grey" 
                        style={{backgroundColor: inputField.tabYes.selected===true && submit===true ? '#00a3ad' : '#F1F4F6' }}>
                        
                            <input type="radio" id="yes" className="radio-check" 
                             onChange={()=>setSelection(inputField.tabYes)} checked={inputField.tabYes.selected===true && submit===true}
                             ></input>
                            { edit===true && <input type="text" className="edit" {...register("tabYes.val", {required:true})}
                            // value={inputField.tabYes.val} onChange={inputHandlers} required
                            ></input> }
                            {/* { errors.tabYes && <p>This field is required</p>} */}
                            { edit===false && <span className="font-bold" onClick={()=>edited()}>{inputField.tabYes.val}</span> }
                            
                        </div>
                        <div className="bg-grey" 
                        style={{backgroundColor: inputField.tabNo.selected===true && submit===true ? '#00a3ad' : '#F1F4F6' }}>
                        
                            <input type="radio" id="no" className="radio-check" 
                            onChange={()=>setSelection(inputField.tabNo)}  checked={inputField.tabNo.selected===true && submit===true}
                            ></input>
                            { edit===true && <input type="text" className="edit" {...register("tabNo.val", {required:true})}
                            // value={inputField.tabNo.val} onChange={inputHandlers} required
                            ></input> }
                            {/* { errors.tabNo.val && <p>This field is required</p>} */}
                            { edit===false && <span className="font-bold" onClick={()=>edited()}>{inputField.tabNo.val}</span> }
                            
                        </div>
                    </div>
                    <button type="submit" className="save-tab ml-10">Save</button>
                </form>
                
            </div>
        </div>
    );
}
export default YesNo;