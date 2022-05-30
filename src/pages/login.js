import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
const img = require("../assets/logo2.png");

const LoginPage = ({ props }) => {
  const initialValues = { id: "", password: "" };  
  let navigator = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  function validateForm(e) {
    e.preventDefault();
    navigator("/Dashboard");
    console.log(formValues);
  }

  function handleInputForms(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  return (
    <section className="login-page">
      <div className="side_navigation">
        <div className="logo">
          <img className="logo_img" src={img} alt="" />
        </div>
        <span className="hos_title">BAPTIST MEDICAL CENTER</span>
        {/* LOGIN FORM HERE */}
        <form onSubmit={validateForm}>
          <div className="input-section">
            <span>WORKER ID</span>
            <input
              type="text"
              placeholder="ENTER ID"
              name="id"
              id="input_id_field"
              onChange={handleInputForms}
              value={formValues.id}
            />
          </div>
          <div className="input-section">
            <span>PASSWORD</span>
            <input
              type="password"
              placeholder="ENTER PASSWORD"
              name="password"
              id="password_field"
              onChange={handleInputForms}
              value={formValues.password}
            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            itemID="submit_btn"
            className="submit_btn"
            onClick={validateForm}
          />
        </form>
      </div>
      {/* <pre>{JSON.stringify(formValues,undefined,1)}</pre> */}
    </section>
  );
};
export default LoginPage;
