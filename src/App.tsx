import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import HealthCheck from './pages/HealthCheck';
import Home from './pages/Home';
import Login from './pages/Login';
import PasswordSent from './pages/PasswordSent';
import Register from './pages/Register';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-sent" element={<PasswordSent />} />
        <Route path="/health" element={<HealthCheck />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
