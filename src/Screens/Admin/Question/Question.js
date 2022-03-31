import './Question.scss';
import React, {useState} from "react";
import ActionCard from "../../../Components/ActionCard/ActionCard";
import SampleQuestion1 from "../../../Components/SampleQuestion1/SampleQuestion1";
import SampleQuestion2 from "../../../Components/SampleQuestion2/SampleQuestion2";
import YesNo from "../../../Components/YesNo/YesNo";
import OpenEnded from "../../../Components/OpenEnded/OpenEnded";
import MixedType from "../../../Components/MixedType/MixedType";
import ImageChoice from "../../../Components/ImageChoice/ImageChoice";
import Rating from "../../../Components/Rating/Rating";
import Ranking from "../../../Components/Ranking/Ranking";
import Matrix from "../../../Components/Matrix/Matrix";
import MultiSelect from "../../../Components/MultiSelect/MultiSelect";

const Question=()=> { 
    const [questionList, setQuestionList] = useState([
        { id: 0, type: 'YesNo', icon:'fa fa-thumbs-up', data: { title: 'Enter the question here', buttons: ['Yes', 'No'], ans: ''}, edit: true },
        { id: 1, type: 'OpenEnded', icon:'fa fa-pencil', data: { title: 'Enter the question here', buttons: ['Short', 'Long'], ansType:'Short', ans: ''}, edit: true },
        { id: 2, type: 'MultiSelect', icon:'fa fa-list', icon:'fa fa-list', data: { title: 'Enter the question here', tabs:[{ id:'1', value:'option1',name:'',selected:false},{ id:'2', value:'option2',name:'',selected:false},{ id:'3', value:'option3',name:'',selected:false}]}, edit: true },
        { id: 3, type: 'MixedType', icon:'fa fa-tasks', data: { title: 'Enter the question here', tab: '', ans: '', options : ['Very satisfied','Satisfied', 'Neutral', 'Dissatisfied','Very dissatisfied']}, edit: true },
        { id: 4, type: 'ImageChoice', icon:'fa fa-picture-o', data: { title: 'Enter the question here', tabs:[{ id:'1', value:'',name:'',selected:false},{ id:'2', value:'',name:'',selected:false},{ id:'3', value:'',name:'',selected:false}]}, edit: true },
        { id: 5, type: 'Rating', icon:'fa fa-star', data: { title: 'Enter the question here', buttons: ['Star', 'Number'], ansType:'Star', ans: ''}, edit: true },
        { id: 6, type: 'Ranking', icon:'fa fa-bar-chart',data: { title: 'Enter the question here', ans: ''}, edit: true },
        { id: 7, type: 'Matrix', icon:'fa fa-th', data: { title: 'Enter the question here', tab: '', ans: ''}, edit: true },
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
    const renderQuestionList = components.map( (question,index) => {
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
            case 'MultiSelect' : return <ActionCard key={question.id} isEdit={question.edit} isDelete={true} id={question.id} onSave={onSave} onDelete={onDelete} onEdit={onEdit}>
            <MultiSelect key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>
            </ActionCard>
            case 'Rating' : return <ActionCard key={question.id} isEdit={question.edit} isDelete={true} id={question.id} onSave={onSave} onDelete={onDelete} onEdit={onEdit}>
            <Rating key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>
            </ActionCard>
            case 'Ranking' : return <ActionCard key={question.id} isEdit={question.edit} isDelete={true} id={question.id} onSave={onSave} onDelete={onDelete} onEdit={onEdit}>
            <Ranking key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>
            </ActionCard>
            case 'Matrix' : return <ActionCard key={question.id} isEdit={question.edit} isDelete={true} id={question.id} onSave={onSave} onDelete={onDelete} onEdit={onEdit}>
            <Matrix key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>
            </ActionCard>
            default : return null;
        }
    });
   
    return (
        <div className="flex-display">
            <div className="comps">
                
                <div className="btns">
                    { questionList.map((qns,index) => 
                    <button className="btns bg-grey" onClick={()=>loadComponent(qns,index)} key={index}>
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
                {renderQuestionList}
           
            </div> 
            
        </div>
    );
}
export default Question;