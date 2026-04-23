import { Routes, Route, Navigate } from 'react-router-dom';
import ClientDashboard from './pages/ClientDashboard';
import ClientFeatures from './pages/ClientFeatures';
import ClientContracts from './pages/ClientContracts';
import AgencyProjects from './pages/AgencyProjects';
import AgencySettings from './pages/AgencySettings';
import DevInfrastructure from './pages/DevInfrastructure';
import DevRepositories from './pages/DevRepositories';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      {/*
        For this prototype, we're putting everything under the same root Layout,
        but typically Agency, Client, and Dev portals might have different layouts.
        We will manage layout differences via props or separate layouts later.
      */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/features" element={<ClientFeatures />} />
      <Route path="/contracts" element={<ClientContracts />} />
      <Route path="/agency-projects" element={<AgencyProjects />} />
      <Route path="/settings" element={<AgencySettings />} />
      <Route path="/dev/infrastructure" element={<DevInfrastructure />} />
      <Route path="/dev/repositories" element={<DevRepositories />} />
    </Routes>
  );
}

export default App;
