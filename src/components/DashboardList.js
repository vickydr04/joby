import React from 'react';
import './DashboardList.css';

const DashboardList = props => {
    return (
        <div className="job-list">
        <h2>{props.jobTitle}</h2>
        <ul>
            {props.jobList.map(jobL => (
                <li key={jobL.id}>
                    <span>{jobL.company}</span>
                </li>
            ))}
            <li>List element</li>
        </ul>
      </div>
      );
}

export default DashboardList;