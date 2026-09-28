import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentDetail from './pages/StudentDetail';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import * as StudentData from './data/students';

const defaultStudents = StudentData.initialStudents || StudentData.students || StudentData.default || [];

export default function App() {
  const [studentsList, setStudentsList] = useState(defaultStudents);

  const parsePath = () => {
    const path = window.location.pathname;

    if (path === '/' || path === '/home') {
      return { page: 'home', id: null };
    }
    if (path === '/students') {
      return { page: 'students', id: null };
    }
    if (path === '/register') {
      return { page: 'register', id: null };
    }
    if (path.startsWith('/students/')) {
      const id = path.replace('/students/', '');
      return { page: 'student-detail', id };
    }
    return { page: '404', id: null };
  };

  const [route, setRoute] = useState(parsePath);

  useEffect(() => {
    const handlePopState = () => setRoute(parsePath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page, id = null) => {
    let newPath = '/';
    if (page === 'students') newPath = '/students';
    else if (page === 'register') newPath = '/register';
    else if (page === 'student-detail' && id) newPath = `/students/${id}`;

    window.history.pushState({}, '', newPath);
    setRoute({ page, id });
  };

  const handleAddStudent = (newStudent) => {
    const createdStudent = {
      ...newStudent,
      id: newStudent.studentId || Date.now(),
    };
    setStudentsList((prev) => [...prev, createdStudent]);
    navigate('students');
  };

  const renderPage = () => {
    switch (route.page) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'students':
        return <Students students={studentsList} onNavigate={navigate} />;
      case 'student-detail':
        return (
          <StudentDetail
            studentId={route.id}
            students={studentsList}
            onNavigate={navigate}
          />
        );
      case 'register':
        return <Register onAddStudent={handleAddStudent} onNavigate={navigate} />;
      default:
        return <NotFound onNavigate={navigate} />;
    }
  };

  return (
    <div style={{ maxWidth: '880px', margin: '0 auto', padding: '36px 20px', fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Centered Modern Dark Header Banner */}
      <header
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #312e81 100%)',
          color: '#ffffff',
          padding: '36px 24px',
          borderRadius: '20px',
          textAlign: 'center',
          marginBottom: '28px',
          boxShadow: '0 20px 25px -5px rgba(15, 23, 42, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            color: '#a5b4fc',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px',
            border: '1px solid rgba(165, 180, 252, 0.2)',
          }}
        >
          Web Systems & Technologies
        </span>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.025em', color: '#f8fafc' }}>
          Student Mini Portal
        </h1>
        <p style={{ margin: 0, fontSize: '0.975rem', color: '#94a3b8', fontWeight: '400' }}>
          Streamlined management for students, profiles, and registrations
        </p>
      </header>

      {/* Page Content Viewport */}
      <main style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '28px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}>
        {renderPage()}
      </main>
    </div>
  );
}