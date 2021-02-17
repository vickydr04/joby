import React, { useEffect, useState } from 'react';
import DashboardList from './DashboardList';

const Dashboard = () => {

  const [ jobList, setJobList ] = useState([]);
  const [ jobTitle, setJobtTitle ] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/job-searches?state=active').then(
      response => response.json()
    ).then(responseData => {
      // @todo Check how to choose when there are more than one job search active (now it chooses the 1st one)
      const jobSearch = responseData.length > 0 ? responseData[0] : {};
      if (jobSearch._id) {
        fetch(`http://localhost:5001/job-searches/${jobSearch._id}/applications`).then(
          response => response.json()
        ).then(responseData => {
          const loadedJobList = [];
          for (const key in responseData) {
            loadedJobList.push({
              id: key,
              company: responseData[key].company,
            });
          }
          setJobList(loadedJobList)
        });
      }
      setJobtTitle(jobSearch.title)
    });

  }, [setJobtTitle]);

  return (
      <div className="App">
        <section>
          <DashboardList jobList={jobList} jobTitle={jobTitle} />
        </section>
      </div>
    );
}

export default Dashboard;
