import React, { useEffect, useState } from 'react';
import DashboardList from './DashboardList';

const Dashboard = () => {
  
  const [ jobList, setJobList ] = useState([]);
  const [ jobTitle, setJobtTitle ] = useState('');

  // @todo parameterize URL and IDs
  useEffect(() => {
    fetch('http://localhost:5001/job-searches/602b3d082b20de73fed6fa35').then(
      response => response.json()
    ).then(responseData => {
      setJobtTitle(responseData.title)
    });
  }, [setJobtTitle]); 

  useEffect(() => {
    fetch('http://localhost:5001/job-searches/602b3d082b20de73fed6fa35/applications').then(
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
  }, []); 

  return (
      <div className="App">
        <section>
          <DashboardList jobList={jobList} jobTitle={jobTitle} />
        </section>
      </div>
    );
}

export default Dashboard;