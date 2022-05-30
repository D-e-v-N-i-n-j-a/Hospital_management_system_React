import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LoginPage from "../pages/login";
import DashBoard from "../pages/dashboard";
import PatientRegistration from "../pages/patient_register";
const Navigators=()=>{
    return (<Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route exact path="/Dashboard" element={<DashBoard />} />
            <Route exact path="/patient_registration" element={<PatientRegistration />} />
        </Routes>
    </Router>)
}


export default Navigators;