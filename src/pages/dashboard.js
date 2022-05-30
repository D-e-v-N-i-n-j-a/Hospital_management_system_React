import Card from "../components/card";
import SideMenu from "../components/side_menu";
import TopNav from "../components/top_header";
import SubMenu from "../components/sub_menu";
// LIST OF ICONS
const icon = require("../assets/icons8-appointment-100.png");
const clinical_logo = require("../assets/icons/clinical.png")
const emergency_icon = require("../assets/icons/emergency.png")
const surgical_icon = require("../assets/icons/surgical.png")
const in_patient = require("../assets/icons/in-patient.png")
const nurse_station = require("../assets/icons/nurse_station.png")
const billing_icon = require("../assets/icons/billing.png")
const insurance_collections = require("../assets/icons/insurance.png")
const laboratory = require("../assets/icons/laboratory.png")
const blood = require("../assets/icons/blood.png")
const radiology = require("../assets/icons/radiology.png")
const eye = require("../assets/icons/eye.png")
const opd = require("../assets/icons/opd.png")
const pharmacy = require("../assets/icons/pharmacy.png")
const dentist = require("../assets/icons/dentist.png")
const mortuary = require("../assets/icons/motuary.png")
const nuero = require("../assets/icons/nuero.png")

const DashBoard = () => {

  return (
    <section className="dashboard-container">
      <SideMenu /> 
      <div className="main-menu-container">
        {/* SUB-MENU */}
        <TopNav/>
        <SubMenu title={"DASHBOARD"}/>
        <div className="department_section_ctx">
        <Card  props={icon} title="PATIENT REGISTRATION" root="/patient_registration"/>
        <Card props={clinical_logo} title="CLINICAL MANAGEMENT"/>
        <Card props={emergency_icon} title="EMERGENCY"/>
        <Card props={surgical_icon} title="SURGICAL THEATRE"/>
        <Card props={in_patient} title="IN PATIENT MANAGEMENT"/>
        <Card props={nurse_station} title="NURSES STATION"/>
        <Card props={billing_icon} title="BILLINGS AND COLLECTIONS"/>
        <Card props={insurance_collections} title="INSURANCE CARD"/>
        <Card props={laboratory} title="LABORATORY"/>
        <Card props={blood} title="BLOOD BANK"/>
        <Card props={radiology} title="RADIOLOGY"/>
        <Card props={eye} title="OPTOMETRY"/>
        <Card props={opd} title="OPD"/>
        <Card props={pharmacy} title="PHARMACY"/>
        <Card props={dentist} title="DENTIST"/>
        <Card props={mortuary} title="MORTUARY"/>
        <Card props={nuero} title="NEUROSURGICAL"/>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
