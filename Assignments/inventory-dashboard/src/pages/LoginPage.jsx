import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Input, Button, Typography, message } from 'antd';

const { Title } = Typography;

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hardcoded LocalStorage key where you already store admin credentials
  const ADMIN_KEY = 'Admin'; // stored as key: "username", value: "password"


  
  const handleAdminLogin = () => {
    const storedPassword = localStorage.getItem(ADMIN_KEY);

    if (!username) {
      message.warning('Please enter your username');
      return;
    }

    if (password === storedPassword) {
      localStorage.setItem('role', 'admin');
      localStorage.setItem('loggedIn', 'true');
      message.success('Welcome Admin!');
      navigate('/');
    } else {
      message.error('Invalid credentials');
    }
  };

  const handleUserLogin = () => {
    localStorage.setItem('role', 'user');
    localStorage.setItem('loggedIn', 'true');
    message.success('Logged in as User');
    navigate('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#f0f2f5',
      }}
    >
      <Card
        title={<Title level={3}>Inventory Login</Title>}
        style={{ width: 380, textAlign: 'center' }}
      >
        <Input
          placeholder="Admin Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <Input.Password
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 20 }}
        />

        <Button
          type="primary"
          block
          onClick={handleAdminLogin}
          style={{ marginBottom: 10 }}
        >
          Login as Admin
        </Button>

        <Button block onClick={handleUserLogin}>
          Continue as User
        </Button>
      </Card>
    </div>
  );
}
