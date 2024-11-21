import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch Projects
    axios.get('http://localhost:5000/projects').then(response => setProjects(response.data));
    // Fetch Clients
    axios.get('http://localhost:5000/clients').then(response => setClients(response.data));
  }, []);

  return (
    <div>
      <h1>Our Projects</h1>
      <div>
        {projects.map(project => (
          <div key={project._id}>
            <img src={`http://localhost:5000/${project.image}`} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <h1>Happy Clients</h1>
      <div>
        {clients.map(client => (
          <div key={client._id}>
            <img src={`http://localhost:5000/${client.image}`} alt={client.name} />
            <h2>{client.name}</h2>
            <p>{client.description}</p>
            <p>{client.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
