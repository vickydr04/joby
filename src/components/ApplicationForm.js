import React, { useState } from 'react';

const ApplicationForm = props => {
    useState()
    return (
        <div>
            <h2>{props.match.params.id}</h2>
        </div>
    );
}

export default ApplicationForm;