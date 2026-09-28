import React from 'react';

export default function Students({ students, onNavigate }) {
  return (
    <div>
      {/* Top Header with Back Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <button
            onClick={() => onNavigate('home')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: '#f1f5f9',
              color: '#334155',
              fontWeight: '600',
              fontSize: '0.875rem',
              border: '1px solid #cbd5e1',
              cursor: 'pointer',
              marginBottom: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            ← Back to Home
          </button>
          <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700', color: '#0f172a' }}>
            Student Directory
          </h2>
        </div>

        <button
          onClick={() => onNavigate('register')}
          style={{
            padding: '10px 18px',
            borderRadius: '10px',
            backgroundColor: '#4f46e5',
            color: '#ffffff',
            fontWeight: '600',
            fontSize: '0.875rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.2)',
          }}
        >
          + Register Student
        </button>
      </div>

      {/* Students List Table / Cards */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '12px' }}>Student ID</th>
              <th style={{ padding: '12px' }}>Name</th>
              <th style={{ padding: '12px' }}>Course</th>
              <th style={{ padding: '12px' }}>Year</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const sid = student.studentId || student.id;
              return (
                <tr key={sid} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#0f172a' }}>{sid}</td>
                  <td style={{ padding: '12px', color: '#334155' }}>{student.name}</td>
                  <td style={{ padding: '12px', color: '#64748b' }}>{student.course}</td>
                  <td style={{ padding: '12px', color: '#64748b' }}>Year {student.year}</td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    <button
                      onClick={() => onNavigate('student-detail', sid)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        backgroundColor: '#e0e7ff',
                        color: '#4338ca',
                        border: 'none',
                        fontWeight: '600',
                        fontSize: '0.825rem',
                        cursor: 'pointer',
                      }}
                    >
                      View Profile →
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}