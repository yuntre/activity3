import React from 'react';

export default function StudentDetail({ studentId, students, onNavigate }) {
  const student = students.find(
    (s) => String(s.id) === String(studentId) || String(s.studentId) === String(studentId)
  );

  if (!student) {
    return (
      <div className="card">
        <h2>Student Not Found</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
          The requested student profile does not exist.
        </p>
        <button className="btn btn-primary" onClick={() => onNavigate('students')}>
          Back to Students
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Student Profile</h2>
      <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p><strong>ID:</strong> {student.studentId || student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Year Level:</strong> Year {student.year}</p>
      </div>
      <button className="btn btn-secondary" onClick={() => onNavigate('students')}>
        ← Back to List
      </button>
    </div>
  );
}