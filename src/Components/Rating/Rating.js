import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './Rating.scss';

const Rating=({ qno, data, id, isEdit = false, onUpdate})=> { 
    
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
        {button} Rating</button>);
    });
    const [rating,setRating] = useState(0);
    const [hover, setHover] = useState(0);
    
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
                        {data.ansType==='Star' && 
                        <div >
                                {[...Array(5)].map((_star, index) => {
                                    index += 1;
                                    return (
                                        <button type="button" key={index} value={data.ans}
                                            className={index <= (hover || rating) ? "on" : "off"}
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}
                                            onChange={onButtonDetailsUpdate}>
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
                                            className={index <= (hover || rating) ? "true" : "false" }
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}
                                            onChange={onButtonDetailsUpdate}>
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