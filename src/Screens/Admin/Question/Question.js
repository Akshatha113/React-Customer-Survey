import './Question.scss';
import React, {useState} from "react";
import ActionCard from "../../../Components/ActionCard/ActionCard";
import SampleQuestion1 from "../../../Components/SampleQuestion1/SampleQuestion1";
import SampleQuestion2 from "../../../Components/SampleQuestion2/SampleQuestion2";
import YesNo from "../../../Components/YesNo/YesNo";
import OpenEnded from "../../../Components/OpenEnded/OpenEnded";
import MixedType from "../../../Components/MixedType/MixedType";
import ImageChoice from "../../../Components/ImageChoice/ImageChoice";

const Question=()=> { 
    const [questionList, setQuestionList] = useState([
        // { id: 0, type: 'SampleQuestion1', data: { title: 'Enter the question here', buttons: ['Yes', 'No']}, edit: true },
        // { id: 1, type: 'SampleQuestion2', data: {}, edit: true },
        { id: 2, type: 'YesNo', data: { title: 'Enter the question here', buttons: ['Yes', 'No'], ans: ''}, edit: true },
        { id: 3, type: 'OpenEnded', data: { title: 'Enter the question here', buttons: ['Short', 'Long'], ansType:'Short', ans: ''}, edit: true },
        { id: 4, type: 'MixedType', data: { title: 'Enter the question here', tab: '', ans: ''}, edit: true },
        { id: 5, type: 'ImageChoice', data: { title: 'Enter the question here', tabs:[{ id:'1', value:'',name:'',selected:false},{ id:'2', value:'',name:'',selected:false},{ id:'3', value:'',name:'',selected:false}]}, edit: true },
        
    ]);

    const onSave = (id) => {
        updateEditFlag(id, true)
        console.log("onSave", id, components);
    }
    const onDelete = (id) => {
        let tempList = [...components];
        tempList = components.filter((q) => q.id !== id);
        setComponents(tempList);
    }
    const onEdit = (id) => {
        updateEditFlag(id, false);
        console.log("onEdit",id);
    }
    const onUpdate = (id, data) => {
        console.log("onUpdate", id, data);
        let tempList = [...components];
        const index = tempList.findIndex(i => i.id === id)
        let question = { ...components[index] };
        question.data = data;
        tempList[index] = question;
        setComponents(tempList);
    }
    const updateEditFlag = (id, value) => {
        let tempList = [...components];
        const index = tempList.findIndex(i => i.id === id)
        let question = { ...components[index] };
        question.edit = value;
        tempList[index] = question;
        setComponents(tempList);
    }
    const updateQuestionID=(index,qnsID)=>{
        let tempList =[...components];
        let question = {...components[index]};
        question.id=qnsID;
        tempList[index]=question;
        setComponents(tempList);
    }
    const [components,setComponents] = useState([]);
    const loadComponent=(qns,index)=> {
       let qnsId=Math.floor(Math.random() * 100);
       console.log(qnsId)
       components.push(qns);
    //    updateQuestionID(index,qnsId);
       setComponents([...components]);
       console.log(components); 
    //    console.log(questionList);
    }
    const rederQuestionList = components.map( (question,index) => {
        switch(question.type) {
            case 'YesNo': return <ActionCard key={question.id} isEdit={question.edit} isDelete={true} id={question.id} onSave={onSave} onDelete={onDelete} onEdit={onEdit}>
            <YesNo qno={index+1} key={question.id} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>
            </ActionCard>
            case 'OpenEnded' : return <ActionCard key={question.id} isEdit={question.edit} isDelete={true} id={question.id} onSave={onSave} onDelete={onDelete} onEdit={onEdit}>
            <OpenEnded key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>
            </ActionCard>
            case 'MixedType' : return <ActionCard key={question.id} isEdit={question.edit} isDelete={true} id={question.id} onSave={onSave} onDelete={onDelete} onEdit={onEdit}>
            <MixedType key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>
            </ActionCard>
            case 'ImageChoice' : return <ActionCard key={question.id} isEdit={question.edit} isDelete={true} id={question.id} onSave={onSave} onDelete={onDelete} onEdit={onEdit}>
            <ImageChoice key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>
            </ActionCard>
            default : return null;
        }
    });
   
    return (
        <div className="flex-display">
            <div className="comps">
                
                <div className="btns">
                    { questionList.map((qns,index) => 
                    <button onClick={()=>loadComponent(qns,index)} key={index}>
                        <span className={qns.icon}></span>
                        {qns.type}
                    </button>
                     )}  
                </div>
            </div>
            <div className="comps2">
                <div className="flex-col">
                    <div className="survey-name">
                        <input type="text" maxLength={50} placeholder="Untitled Survey" className="input-field survey-title" 
                        ></input>
                    </div>
                    <div className="survey-desc">
                        <input type="text" placeholder="Untitled Survey Descrption" className="input-field survey-description font-bold" 
                        ></input>
                    </div>
                </div>
                {rederQuestionList}
           
            </div> 
            
        </div>
    );
}
export default Question;