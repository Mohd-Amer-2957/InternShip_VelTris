import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import InventoryPage from './pages/InventoryPage';
import ReportsPage from './pages/ReportsPage';
import LoginPage from './pages/LoginPage';

const { Header, Content } = Layout;


// Redirect to Login page on clicking any page without loggin
function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}



// Header menu that hides logout on /login
function AppHeader() {
  const location = useLocation();
  const onLoginPage = location.pathname === '/login';

  const menuItems = [
    { key: 'inventory', label: <Link to="/">Inventory</Link> },
    { key: 'reports', label: <Link to="/reports">Reports</Link> },
  ];


  
  // Only show Logout if not on the login page
  if (!onLoginPage) {
    menuItems.push({
      key: 'logout',
      label: (
        <Link
          to="/login"
          onClick={() => {
            // only clear login details, not stored inventory/admin data
            localStorage.removeItem('role');
            localStorage.removeItem('loggedIn');
          }}
        >
          Logout
        </Link>
      ),
    });
  }

  return (
    <Header>
      <div style={{ float: 'left', color: '#fff', marginRight: 24 }}>
        Inventory Dashboard
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname === '/reports' ? 'reports' : 'inventory']}
        items={menuItems}
      />
    </Header>
  );
}

export default function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <Content style={{ padding: 24 }}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <InventoryPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <ReportsPage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}
