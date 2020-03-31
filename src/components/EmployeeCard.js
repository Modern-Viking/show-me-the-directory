import React from "react";

const EmployeeCard = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                {props.employee.department}
            </div>
            <div className="card-body">
                <h5 classname="card-title">
                    {props.employee.first_name} {props.employee.last_name}
                </h5>
                <p className = "card-text">
                    Title:  {props.employee.job_title}
                </p>
                <p className = "card-text">
                    Email:  {props.employee.email}
                </p>
            </div>
        </div>
    )
};

export default EmployeeCard