import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ModuleDetail from './pages/ModuleDetail';
import Pretest from './pages/Pretest';
import Material from './pages/Material';
import Postest from './pages/Postest';
import Result from './pages/Result';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ModuleManagement from './pages/admin/ModuleManagement';
import SubModuleManagement from './pages/admin/SubModuleManagement';
import MaterialManagement from './pages/admin/MaterialManagement';
import QuestionManagement from './pages/admin/QuestionManagement';
import UserManagement from './pages/admin/UserManagement';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/module/:id"
                element={
                  <ProtectedRoute>
                    <ModuleDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/pretest/:id"
                element={
                  <ProtectedRoute>
                    <Pretest />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/material/:id"
                element={
                  <ProtectedRoute>
                    <Material />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/postest/:id"
                element={
                  <ProtectedRoute>
                    <Postest />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/result/:id"
                element={
                  <ProtectedRoute>
                    <Result />
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/modules"
                element={
                  <AdminRoute>
                    <ModuleManagement />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/submodules"
                element={
                  <AdminRoute>
                    <SubModuleManagement />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/materials"
                element={
                  <AdminRoute>
                    <MaterialManagement />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/questions"
                element={
                  <AdminRoute>
                    <QuestionManagement />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserManagement />
                  </AdminRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
