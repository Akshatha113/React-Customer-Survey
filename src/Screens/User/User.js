import React, {useState} from "react";
import ActionCard from "../../Components/ActionCard/ActionCard";
import SampleQuestion1 from "../../Components/SampleQuestion1/SampleQuestion1";
import SampleQuestion2 from "../../Components/SampleQuestion2/SampleQuestion2";
import YesNo from "../../Components/YesNo/YesNo";
import OpenEnded from "../../Components/OpenEnded/OpenEnded";
import MixedType from "../../Components/MixedType/MixedType";

const User = () => {
    const [questionList, setQuestionList] = useState([
        // { id: 0, type: 'SampleQuestion1', data: { title: 'Enter the question here', buttons: ['Yes', 'No']}, edit: true },
        // { id: 1, type: 'SampleQuestion2', data: {}, edit: true },
        { id: 2, type: 'YesNo', data: { title: 'Enter the question here', buttons: ['Yes', 'No'], ans: ''}, edit: true },
        { id: 3, type: 'OpenEnded', data: { title: 'Enter the question here', buttons: ['Short', 'Long'], ansType:'Short', ans: ''}, edit: true },
        // { id: 4, type: 'MixedType', data: { title: 'Enter the question here', tab: '', ans: ''}, edit: true },
        
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

    const rederQuestionList = questionList.map( (question,index) => { return (
        <ActionCard
            key={question.id}
            isEdit={question.edit}
            isDelete={true}
            id={question.id}
            onSave={onSave}
            onDelete={onDelete}
            onEdit={onEdit}>
            {/* {question.type === "SampleQuestion1" && <SampleQuestion1 qno={index} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>} */}
            {/* {question.type === "SampleQuestion2" && <SampleQuestion2 qno={index} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>} */}
            {question.type === "YesNo" && <YesNo qno={index} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>}
            {question.type === "OpenEnded" && <OpenEnded qno={index} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>}
            {/* {question.type === "MixedType" && <MixedType qno={index} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>} */}
        </ActionCard>
        )});
    return (
        <div>{rederQuestionList}</div>
    );
}

export default User;