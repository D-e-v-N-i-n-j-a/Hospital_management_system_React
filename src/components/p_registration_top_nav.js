import React from "react";

const P_Registration_Top_Nav=()=>{
    return <section className="p_container_top_ctx">
        <div className="p_sub_menu">
            {/* NATIONAL HEALTH INSURANCE */}
            <div className="health_insurance">
                <span>NHIS ID: </span>
                <input type="text" />
            </div>
            <div className="search_section">
                <i className="fa fa-search"></i>
                <i className="fa fa-hand"></i>
            </div>
            <div className="expired_date">
                <span>NHIS Expired Date</span>
                <input type="date" name="pick" id="" />
            </div>
            <div className="is_insured">
                <span>Not Insured</span>
                <input type="checkbox" name="insured" id="" />
            </div>
            <div className="patient_photo">
                <i className="fa fa-user"></i>
            </div>
        </div>
        <span className="p_title">PERSONAL DETAILS</span>
    </section>
}

export default P_Registration_Top_Nav;