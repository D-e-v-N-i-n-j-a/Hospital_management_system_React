import React from "react";
import SubMenu from "./sub_menu";
const PatientRelativeInfo = () => {
    console.log('server running on port 5000')
  return (
    <section className="patient_relative_info">
      <SubMenu title={"PATIENT RELATIVE INFORMATION"} />
      <div className="patient_relative_container">
        <div className="patient_relative__info">
          <div className="relative_ctx">
            <label>First Name</label>
            <input type="text" name="" id="" className="text_field"/>
          </div>
          <div className="relative_ctx">
            <label>First Name</label>
            <input type="text" name="" id="" className="text_field"/>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PatientRelativeInfo;
