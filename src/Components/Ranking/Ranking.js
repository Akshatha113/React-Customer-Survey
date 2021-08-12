import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './Ranking.scss';

const Ranking=({ qno, data, id, isEdit = false, onUpdate})=> {

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
    const handleDragEnter = (e, index) => {
        // e.target.style.backgroundColor = "#336699";
        const newList = [...list];
        const item = newList[dragItem];
        newList.splice(dragItem, 1);
        newList.splice(index, 0, item);
        setDragItem(index);
        setList(newList);
    };      
    const handleDragLeave = (e) => {
        e.target.style.backgroundColor = "none";
    };      
    const handleDrop = (e) => {
        e.target.style.backgroundColor = "none";
    };
    const handleDragStart = (index) => {
        setDragItem(index);
    };
    const [dragItem, setDragItem] = useState();
    const [list, setList] = useState([
    "Team Lead",
    "Application Analyst",
    "Project Manager",
    "CEO",
    "Network Security",
    "Programmer",
    "Testing",
    "PMO Lead",
    ]);
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
                <div className="flex-display content-left line font-bold">              
                    <ul className="dnd">
                        {list && list.map((item, index) => (
                            <li 
                                className='bg-grey '
                                draggable
                                key={index}
                                onDragStart={() => handleDragStart(index)}
                                onDragEnter={(e) => handleDragEnter(e, index)}
                                onDragLeave={(e) => handleDragLeave(e)}
                                onDrop={(e) => handleDrop(e)}
                                onDragOver={(e) => e.preventDefault()}>
                                <div className='flex-display'>
                                    <div class="dot">&#xFE19;</div>
                                    <div class="dot">&#xFE19;</div>
                                </div>
                                <div className='drag-index'> 
                                    <div className='sort'>
                                        {index+1}
                                    </div>
                                </div>
                                    {item}                              
                            </li>
                        ))}
                    </ul>                        
                </div>
            </div>
            </div>
      
    );
}
export default Ranking;