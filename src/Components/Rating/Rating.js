import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './Rating.scss';

const Rating=({ qno, data, id, isEdit = false, onUpdate})=> { 
    
    const onFieldUpdate = (field,value) => {
        let tempData = { ...data };
        if(field==="TITLE"){
            tempData.title = value; 
        }
        if(field==="ANSWER"){
            tempData.ans= value; 
        }
        if(field==="SELECTED"){
            tempData.ansType = value;
        }
        onUpdate(id,tempData);
    }
    const renderButton = data.buttons.map((button, index) => {
        return (<button key={index} type="button"  
        className={data.ansType===button ? "btns bg-grey active": "btns bg-grey"}
        onClick={()=>onFieldUpdate("SELECTED",button)}> 
        {button}Rating</button>);
    });
    const [rating,setRating] = useState(0);
    const [hover, setHover] = useState(0);
    
    return (
        <div className="card-body flex-display">
            <span className="question font-bold">{qno}.</span>
            <div className="card-box">
                <h5 className="card-title flex-display">
                    {isEdit && <span className="question font-bold">{data.title}</span>}
                    {!isEdit && <input type="text" value={data.title} onChange={(e)=>onFieldUpdate("TITLE",e.target.value)}/>}
                </h5>
                <div className="rating" role="group" aria-label="Basic outlined example">
                    <div className="flex-display text-btns float-end">{renderButton}</div>
                    <div className="input-box">
                        {data.ansType==='Star' && 
                        <div >
                                {[...Array(5)].map((_star, index) => {
                                    index += 1;
                                    return (
                                        <button type="button" key={index} value={data.ans}
                                            className={index <= (hover || rating) ? "active-star" : "inactive-star"}
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}
                                            onChange={(e)=>onFieldUpdate("ANSWER",e.target.value)}>
                                            <i className="fa fa-star" value={data.ans}></i>
                                        </button>
                                    );
                                })}
                        </div> }
                        {data.ansType==='Number' && <div >
                                {[...Array(10)].map((_star, index) => {
                                    // index += 1;
                                    return (
                                        <button type="button" key={index} value={data.ans}
                                            className={index <= (hover || rating) ? "rate-num bg-grey active" : "rate-num bg-grey" }
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}
                                            onChange={(e)=>onFieldUpdate("ANSWER",e.target.value)}>
                                            <span>{index+1}</span>
                                        </button>
                                    );
                                })}
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;