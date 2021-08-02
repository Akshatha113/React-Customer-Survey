import React, { useState } from "react";

const SampleQuestion2 = ({ qno, data = {}, id, isEdit = false, onUpdate }) => {
    const [quesDetails, setQuesDetails] = useState(data);
    const onDetailsUpdate = () => {
        onUpdate()
    }
    return (
        <div className="card-body">
            <h5 className="card-title">{qno}. Question title goes here</h5>
            <label className="form-label">Example range</label>
            <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"/>
        </div>
    );
}
export default SampleQuestion2;