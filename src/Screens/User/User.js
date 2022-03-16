import React, {useState} from "react";
import ActionCard from "../../Components/ActionCard/ActionCard";
import SampleQuestion1 from "../../Components/SampleQuestion1/SampleQuestion1";
import SampleQuestion2 from "../../Components/SampleQuestion2/SampleQuestion2";
import YesNo from "../../Components/YesNo/YesNo";
import OpenEnded from "../../Components/OpenEnded/OpenEnded";
import MixedType from "../../Components/MixedType/MixedType";
import ImageChoice from "../../Components/ImageChoice/ImageChoice";
import MultiSelect from "../../Components/MultiSelect/MultiSelect";

const User = () => {
    const [questionList, setQuestionList] = useState([
        // { id: 0, type: 'SampleQuestion1', data: { title: 'Enter the question here', buttons: ['Yes', 'No']}, edit: true },
        // { id: 1, type: 'SampleQuestion2', data: {}, edit: true },
        { id: 2, type: 'YesNo', data: { title: 'Enter the question here', buttons: ['Yes', 'No'], ans: ''}, edit: true },
        { id: 3, type: 'OpenEnded', data: { title: 'Enter the question here', buttons: ['Short', 'Long'], ansType:'Short', ans: ''}, edit: true },
        { id: 4, type: 'MixedType', data: { title: 'Enter the question here', tab: '', ans: '', options : ['Very satisfied','Satisfied', 'Neutral', 'Dissatisfied','Very dissatisfied']}, edit: true },
        { id: 5, type: 'ImageChoice', data: { title: 'Enter the question here', tabs:[{ id:'1', value:'',name:'',selected:false},{ id:'2', value:'',name:'',selected:false},{ id:'3', value:'',name:'',selected:false}]}, edit: true },
        // { id: 6, type: 'MultiSelect', data: { title: 'Enter the question here', tabs:[{ id:'1', value:'',name:'',selected:false},{ id:'2', value:'',name:'',selected:false},{ id:'3', value:'',name:'',selected:false}]}, edit: true },
    ]);

    const onSave = (id) => {
        updateEditFlag(id, true)
        console.log("onSave", id, questionList);
    }
    const onDelete = (id) => {
        let tempList = [...questionList];
        tempList = questionList.filter((q) => q.id !== id);
        setQuestionList(tempList);
    }
    const onEdit = (id) => {
        updateEditFlag(id, false);
        console.log("onEdit",id);
    }
    const onUpdate = (id, data) => {
        console.log("onUpdate", id, data);
        let tempList = [...questionList];
        const index = tempList.findIndex(i => i.id === id)
        let question = { ...questionList[index] };
        question.data = data;
        tempList[index] = question;
        setQuestionList(tempList);
    }
    const updateEditFlag = (id, value) => {
        let tempList = [...questionList];
        const index = tempList.findIndex(i => i.id === id)
        let question = { ...questionList[index] };
        question.edit = value;
        tempList[index] = question;
        setQuestionList(tempList);
    }
    const rederQuestion = questionList.map( (question,index) => { 
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
            default : return null;
        }
    });
    // const rederQuestionList = questionList.map( (question,index) => {    return (
    //     <ActionCard
    //         key={question.id}
    //         isEdit={question.edit}
    //         isDelete={true}
    //         id={question.id}
    //         onSave={onSave}
    //         onDelete={onDelete}
    //         onEdit={onEdit}> 
    //         {
    //             (()=>{
    //                 switch(question.type) {
    //                 case 'YesNo': return (<YesNo qno={index+1} key={question.id} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>);
    //                 case 'OpenEnded' : return (<OpenEnded key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>);
    //                 case 'MixedType' : return (<MixedType key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>); 
    //                 case 'ImageChoice' : return( <ImageChoice key={question.id} qno={index+1} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>);
    //                 default : return null; 
    //                 }
    //             })

    //         }
    //     </ActionCard>
    // )});
    return (
        <div>{rederQuestion}</div>
    );
}

export default User;