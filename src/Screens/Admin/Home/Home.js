import React, {useState} from "react";
import './Home.scss';

const Home=()=> {

    const searchFilter=(value)=> {
        console.log(value);
        return value.toLowerCase()
    }
    return(
        <div className="users">
            <div className="lists bg-white">
                <div className="flex-display">
                    <div className="col-xl-6 col-sm-6" style={{width:"50%"}}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search survey"
                            onChange={(e)=>searchFilter(e.target.value)}></input>
                            <div className="input-group-append" >
                                <button className="btn btn-secondary" type="button">
                                <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-6 new-survey" style={{width:"50%"}}>
                        <button type="button" className="font-bold float-end"><i className="fa fa-plus" ></i> New Survey</button>
                    </div>
                </div>
                <div className="survey-list">
                    <div className="container-fluid">
                        <div className="row datas">
                            <div className="col-xl-6 col-sm-6 col-12"> 
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex views">
                                                <div className="view1">
                                                    <div className="align-self-center font-bold">title</div>
                                                    <div className="desc align-self-center">description</div>   
                                                </div>                         
            
                                                <div className="view2 flex-display">
                                                    <div className="text-right align-self-center view3">
                                                        <p className="font-bold">3</p>
                                                        <span>Questions</span>
                                                    </div>
                    
                                                    <div className="align-self-center view4">
                                                        <div>
                                                            <i className="fa fa-ellipsis-v dropdown" href="" dropdown-toggle="dropdown" role="button" 
                                                            id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                                    
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                <li><a className="dropdown-item" href="#">Edit survey</a></li>
                                                                <li><a className="dropdown-item"  data-toggle="modal" data-target="#myModal">duplicate</a></li>
                                                                <li><a className="dropdown-item" data-target="#myModal">delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header mod-head">
                            <h4 className="modal-title">Create a survey</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <label>Survey title</label>
                            <input type="text" placeholder="Enter Survey title" className="input-field" name="title"></input>
                            <div className="error-message">Please enter title of the survey.</div>
                            <label>Survey description</label>
                            <input type="text" placeholder="Enter Survey Descrption" className="input-field"></input>
                            <div className="error-message">Please enter survey description.</div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" 
                            data-dismiss="modal">Duplicate Survey</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    );    
}

export default Home;