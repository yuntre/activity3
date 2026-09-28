import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Modern Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
          borderRadius: '16px',
          padding: '40px 32px',
          border: '1px solid #c7d2fe',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.825rem',
            fontWeight: '700',
            color: '#4338ca',
            boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
          }}
        >
          <span style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
          System Online & Ready
        </div>

        <div>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '2rem', fontWeight: '800', color: '#1e1b4b', letterSpacing: '-0.025em' }}>
            Welcome to the Student Mini Portal 👋
          </h2>
          <p style={{ margin: 0, fontSize: '1.05rem', color: '#475569', lineHeight: '1.6', maxWidth: '640px' }}>
            Your central hub for viewing student directories, managing academic records, and registering new entries seamlessly.
          </p>
        </div>

        {/* Hero CTA Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
          <button
            onClick={() => onNavigate('students')}
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '0.925rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
            }}
          >
            Explore Students List →
          </button>
          <button
            onClick={() => onNavigate('register')}
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              color: '#334155',
              fontWeight: '600',
              fontSize: '0.925rem',
              border: '1px solid #cbd5e1',
              cursor: 'pointer',
            }}
          >
            + Register New Student
          </button>
        </div>
      </div>
    </div>
  );
}