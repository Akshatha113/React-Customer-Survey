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

    // const onSave = (id) => {
    //     updateEditFlag(id, true)
    //     console.log("onSave", id, questionList);
    // }
    // const onDelete = (id) => {
    //     let tempList = [...questionList];
    //     tempList = questionList.filter((q) => q.id !== id);
    //     setQuestionList(tempList);
    // }
    // const onEdit = (id) => {
    //     updateEditFlag(id, false);
    //     console.log("onEdit",id);
    // }
    // const onUpdate = (id, data) => {
    //     console.log("onUpdate", id, data);
    //     let tempList = [...questionList];
    //     const index = tempList.findIndex(i => i.id === id)
    //     let question = { ...questionList[index] };
    //     question.data = data;
    //     tempList[index] = question;
    //     setQuestionList(tempList);
    // }
    // const updateEditFlag = (id, value) => {
    //     let tempList = [...questionList];
    //     const index = tempList.findIndex(i => i.id === id)
    //     let question = { ...questionList[index] };
    //     question.edit = value;
    //     tempList[index] = question;
    //     setQuestionList(tempList);
    // }
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
    const rederQuestionList = components.map( (question,index) => { return (
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
            {question.type === "MixedType" && <MixedType qno={index} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>}
            {question.type === "ImageChoice" && <ImageChoice qno={index} id={question.id} data={question.data} isEdit={question.edit} onUpdate={onUpdate}/>}
        </ActionCard>
        )});
   
    return (
        <div>
            <div className="comps">
                
                <div className="btns">
                    { questionList.map((qns,index) => 
                    <button onClick={()=>loadComponent(qns,index)} key={index}>
                        <span className={qns.icon}></span>
                        {qns.type}
                    </button>
                     )}  
                </div>
                {/* <div>
                { components.map((qns,index) => 
                    <div key={index}>{qns.type}</div>
                     )}     
                </div> */}
            </div>
            {rederQuestionList}
            <div className="comps2">
                <div className="flex-col">
                    <div className="survey-name">
                        <input type="text" maxLength={50} placeholder="Untitled Survey" className="input-field survey-title" 
                        ></input>
                        {/* {errors.props.title && 'Please enter survey title' } */}
                    </div>
                    <div className="survey-desc">
                        <input type="text" placeholder="Untitled Survey Descrption" className="input-field survey-description font-bold" 
                        ></input>
                        <div className="error-message">Please enter survey description.</div>
                    </div>
                </div>
                
           
            </div> 
            
        </div>
    );
    // const dynamicComponents = [
    //     {name:"ImageChoice",isDisable:false,comp:'Multi Select',icon:'fa fa-list'}, 
    //     {name:"YesNo",isDisable:false,comp:'Yes or No',icon:'fa fa-thumbs-up'}, 
    //     {name:"OpenEnded",isDisable:false,comp:'Matrix',icon:'fa fa-th'},
    //     // {name:RatingScaleComponent,isDisable:false,comp:'Rating',icon:'fa fa-star'},
    //     // {name:RankingComponent,isDisable:false,comp:'Ranking',icon:'fa fa-bar-chart'}, 
    //     // {name:OpenEndedComponent,isDisable:false,comp:'Open Ended',icon:'fa fa-pencil'}, 
    //     // {name:MixedTypeComponent,isDisable:false,comp:'Mixed Type',icon:'fa fa-tasks'},
    //     // {name:ImageChoiceComponent,isDisable:false,comp:'Image Choice',icon:'fa fa-picture-o'}
    // ];
    // const loadComponent = () => {

    // }
    // return(
    //     <div>
    //         <div className="comps">
                
    //             <div className="btns">
    //                 { dynamicComponents.map((qns,index) => 
    //                 <button onClick={()=>loadComponent(qns.name)} key={index}>
    //                     <span className={qns.icon}></span>
    //                     {qns.comp}
    //                 </button>
    //                  )}  
    //             </div>
               
    //         </div>

    //         <div className="comps2">
    //             <div className="flex-col">
    //                 <div className="survey-name">
    //                     <input type="text" maxLength={50} placeholder="Untitled Survey" className="input-field survey-title" 
    //                     ></input>
    //                     {/* {errors.props.title && 'Please enter survey title' } */}
    //                 </div>
    //                 <div class="survey-desc">
    //                     <input type="text" placeholder="Untitled Survey Descrption" className="input-field survey-description font-bold" 
    //                     ></input>
    //                     <div className="error-message">Please enter survey description.</div>
    //                 </div>
    //             </div>
                
    //             <div>

    //             </div>
    //         </div>

    //     </div>
    // );
}
export default Question;