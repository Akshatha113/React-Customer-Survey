import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import RadioItem from './RadioItem';
import './Matrix.scss';

const Matrix=({ qno, data, id, isEdit = false, onUpdate})=> { 
    
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

    const [optionList, setOptionList] = useState([
        {name:'Option 1', value: ''},
        {name:'Option 2', value: ''},
        {name:'Option 3', value: ''},
        {name:'Option 4', value: ''},
        {name:'Option 5', value: ''}
    ]);
    const [labels, setLabels] = useState(['strongly agree','agree', 'neutral', 'disagree', 'strong disagree']);

    const onSelect = (value,index) => {
        let tempData = [...optionList];
        tempData[index].value=value;
        setOptionList(tempData);
    }

    const renderRadioLabelsItems  = ['',...labels].map((label) => {
        return (<label key={label}>{label}</label>);
    });

    return (
        <div className="card-body flex-display">
            <span className="question font-bold">{qno}.</span>
            <div className="card-box">
                <h5 className="card-title flex-display">
                    {isEdit && <span className="question font-bold">{data.title}</span>}
                    {!isEdit && <input type="text" value={data.title} onChange={(e)=>onFieldUpdate("TITLE",e.target.value)}/>}
                </h5>
                <div className="" role="group" aria-label="Basic outlined example">
                    <div className="flex-display text-btns"></div>
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="grid-container">
                                {renderRadioLabelsItems}
                            </div>
                            <br />
                            <RadioItem list={optionList} labels={labels} onItemSelect={onSelect}/>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}  
export default Matrix;