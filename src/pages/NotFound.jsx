import React from 'react';

export default function NotFound({ onNavigate }) {
  return (
    <div className="page-card text-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="btn btn-primary" onClick={() => onNavigate('home')}>
        Go to Home
      </button>
    </div>
  );
}