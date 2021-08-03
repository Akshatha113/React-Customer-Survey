import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './RatingScale.scss';

function Rating(){

    const [inputFieldRating, setInputFieldRating] = useState({
        comp:'RatingComponent',
        qns:'Please enter question',
        ansType:'star',
        ans:''
    });

    const [editRating, setEditRating]=useState(false);

    const {register, handleSubmit, setValue, getValues, formState:{errors} } = useForm({
        defaultValues:inputFieldRating
    });
   
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        setInputFieldRating(getValues());
        console.log("rating",inputFieldRating);
        setEditRating(false);   
    } 

    const selectTabs = (tab) => {        
        if(tab==="star"){
            // inputFieldRating.ansType='star';
            setValue('ansType','star');
        } else {
            // inputFieldRating.ansType='number';
            setValue('ansType','number');
        }
        setInputFieldRating(getValues());        
    }
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const [labels,setLabels] = useState(0);
     
    const mystyle={
        backgroundColor:"yellow"
    };
        
    return(
        <div className="container bg-white">
            <div className="ans-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    { editRating===true && <input type="text" {...register("qns", {required:true})} className="input-field ml-10" 
                        // onChange={inputHandlers} placeholder="Please enter question..." value={inputField.qns} required
                        ></input> }
                    { errors.qns && <p className="error-message">This field is required</p>}
                    { editRating===false && <p className="question font-bold ml-10" onClick={()=>setEditRating(true)}>{inputFieldRating.qns}</p> }
                    <div className="flex-display content-left line">
                        <div className="text-btns">
                            <button type="button" onClick={()=>selectTabs("star")} 
                            // style={{border: inputFieldRating.ansType==="long" ? '2px solid #00a3ad' : '' }} 
                            className={inputFieldRating.ansType==="star" ? "active": "edit"}>Star Rating</button>
                            <button type="button" onClick={()=>selectTabs("number")} 
                            // style={{border: inputFieldRating.ansType==="short" ? '2px solid #00a3ad' : '' }} 
                            className={inputFieldRating.ansType==="number" ? "active" : "edit"}>Number Rating</button>
                        </div>
                        <div className='rating'>
                            {inputFieldRating.ansType==='star' && 
                            <div {...register("ans", {required:true})}>
                                {[...Array(5)].map((_star, index) => {
                                    index += 1;
                                    return (
                                        <button type="button" key={index}
                                            className={index <= (hover || rating) ? "on" : "off"}
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}>
                                            <span className="star">&#9733;</span>
                                        </button>
                                    );
                                })}
                            </div>
                            }  
                            {/* {inputFieldRating.ansType==='number' &&
                            <div {...register("ans", {required:true})}>
                                {[...Array(11)].map((label, index) =>{
                                    index+=1;
                                    return (
                                        <button type='button' style={mystyle}
                                        key={label}
                                        className={index <= (hover || rating) ? "on" : "off"}
                                        onClick={() => setRating(index)}
                                        onMouseEnter={() => setHover(index)}
                                        onMouseLeave={() => setHover(rating)}>
                                        <span>&#9733;</span>
                                        </button>
                                    );
                                })}
                            </div>
                            }                           */}
                        </div>
                    </div>
                    <button type="submit" className="save-tab ml-10">Save</button>
                </form>
            </div>
        </div>
    );
        
}

export default Rating;