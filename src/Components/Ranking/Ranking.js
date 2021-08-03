import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './Ranking.scss';

function Ranking() { 

    const [inputFieldRanking, setInputFieldRanking] = useState({
        comp:'RankingComponent',
        qns:'Please enter question',
        // ansType:'short',
        // ans:''
    });

    const [editRanking, setEditRanking]=useState(false);

    const {register, handleSubmit, setValue, getValues, formState:{errors} } = useForm({
        defaultValues:inputFieldRanking
    });
   
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        setInputFieldRanking(getValues());
        console.log("Rank",inputFieldRanking);
        setEditRanking(false);   
    } 
   
    // const selectTabs = (tab) => {
        
    //     if(tab==="long"){
    //         // inputFieldRanking.ansType='long';
    //         setValue('ansType','long');
    //     } else {
    //         // inputFieldRanking.ansType='short';
    //         setValue('ansType','short');
    //     }
    //     setInputFieldRanking(getValues());
        
    // }
    const [dragItem, setDragItem] = useState();
    const [list, setList] = useState([
    "The Call Of Ktulu",
    "For Whom The Bell Tolls",
    "The Day That Never Comes",
    "The Memory Remains",
    "Confusion",
    "Moth Into Flame",
    "The Outlaw Torn",
    "No Leaf Clover",
    "Halo on Fire",
    ]);
    const handleDragStart = (index) => {
        setDragItem(index);
      };
      
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
    
    return(
        <div className="container bg-white">
            <div className="ans-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    { editRanking===true && <input type="text" {...register("qns", {required:true})} className="input-field ml-10" 
                    // onChange={inputHandlers} placeholder="Please enter question..." value={inputField.qns} required
                    ></input> }
                    { errors.qns && <p className="error-message">This field is required</p>}
                    { editRanking===false && <p className="question font-bold ml-10" onClick={()=>setEditRanking(true)}>{inputFieldRanking.qns}</p> }
                    <div className="flex-display content-left line font-bold">              
                        <ul className="dnd">
                            {list &&
                                list.map((item, index) => (
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
                    <button type="submit" className="save-tab ml-10">Save</button>
                </form>                
            </div>
        </div>
    );
}

export default Ranking;