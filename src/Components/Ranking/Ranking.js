import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './Ranking.scss';

const Ranking=({ qno, data, id, isEdit = false, onUpdate})=> {

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
    const handleDragEnter = (_e, index) => {
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
    // "CEO",
    // "Network Security",
    // "Programmer",
    // "Testing",
    // "PMO Lead",
    ]);

    return (
        <div className="card-body flex-display">
            <span className="question font-bold">{qno}.</span>
            <div className="card-box">
                <h5 className="card-title flex-display">
                    {isEdit && <span className="question font-bold">{data.title}</span>}
                    {!isEdit && <input type="text" value={data.title} onChange={(e)=>onFieldUpdate("TITLE",e.target.value)}/>}
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