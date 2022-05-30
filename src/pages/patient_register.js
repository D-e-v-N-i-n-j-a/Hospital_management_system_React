import React from "react";
import SideMenu from "../components/side_menu";
import TopNav from "../components/top_header";
import SubMenu from "../components/sub_menu";
import PatientRelativeInfo from "../components/relative_info";
import P_Registration_Top_Nav from "../components/p_registration_top_nav";
import Patient_Personal_Details from "../components/personal_details";
const PatientRegistration = () => {
  return (
    <section className="patient_registration">
      <SideMenu />
      <div className="patient_registration_ctx">
        <TopNav />
        <SubMenu title={"PATIENT REGISTRATION"} />
        {/* DISPLAY REGISTRATION FIELD */}
        <div className="registration_container">
          <P_Registration_Top_Nav />
          <Patient_Personal_Details />
          <PatientRelativeInfo />
        </div>
      </div>
    </section>
  );
};

export default PatientRegistration;
