import React, { useState } from 'react';
import { validateStudentForm } from '../utils/validate';

export default function Register({ onAddStudent, onNavigate }) {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    email: '',
    course: '',
    year: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateStudentForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onAddStudent(formData);
    }
  };

  const inputStyle = (fieldName) => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: `1.5px solid ${errors[fieldName] ? '#f43f5e' : '#e2e8f0'}`,
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f8fafc',
  });

  return (
    <div>
      {/* Top Header with Back Button */}
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
          marginBottom: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        ← Back to Home
      </button>

      <h2 style={{ margin: '0 0 6px 0', fontSize: '1.5rem', fontWeight: '700', color: '#0f172a' }}>
        Student Registration
      </h2>
      <p style={{ margin: '0 0 24px 0', color: '#64748b', fontSize: '0.9rem' }}>
        Please fill out all required information below.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Student ID */}
        <div>
          <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', marginBottom: '6px', color: '#334155' }}>
            Student ID
          </label>
          <input
            type="text"
            name="studentId"
            placeholder="e.g., 2024-0001"
            style={inputStyle('studentId')}
            value={formData.studentId}
            onChange={handleChange}
          />
          {errors.studentId && (
            <p style={{ color: '#f43f5e', fontSize: '0.825rem', margin: '6px 0 0 2px', fontWeight: '500' }}>
              {errors.studentId}
            </p>
          )}
        </div>

        {/* Full Name */}
        <div>
          <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', marginBottom: '6px', color: '#334155' }}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g., Jane Doe"
            style={inputStyle('name')}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p style={{ color: '#f43f5e', fontSize: '0.825rem', margin: '6px 0 0 2px', fontWeight: '500' }}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', marginBottom: '6px', color: '#334155' }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="e.g., jane@example.com"
            style={inputStyle('email')}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p style={{ color: '#f43f5e', fontSize: '0.825rem', margin: '6px 0 0 2px', fontWeight: '500' }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Course / Program */}
        <div>
          <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', marginBottom: '6px', color: '#334155' }}>
            Course / Program
          </label>
          <input
            type="text"
            name="course"
            placeholder="e.g., BS Information Technology"
            style={inputStyle('course')}
            value={formData.course}
            onChange={handleChange}
          />
          {errors.course && (
            <p style={{ color: '#f43f5e', fontSize: '0.825rem', margin: '6px 0 0 2px', fontWeight: '500' }}>
              {errors.course}
            </p>
          )}
        </div>

        {/* Year Level */}
        <div>
          <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', marginBottom: '6px', color: '#334155' }}>
            Year Level
          </label>
          <select
            name="year"
            style={inputStyle('year')}
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Select Year Level</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          {errors.year && (
            <p style={{ color: '#f43f5e', fontSize: '0.825rem', margin: '6px 0 0 2px', fontWeight: '500' }}>
              {errors.year}
            </p>
          )}
        </div>

        {/* Form Actions */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
          <button
            type="submit"
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
            Submit Registration
          </button>
          <button
            type="button"
            onClick={() => onNavigate('home')}
            style={{
              padding: '12px 20px',
              borderRadius: '10px',
              backgroundColor: '#f1f5f9',
              color: '#475569',
              fontWeight: '600',
              fontSize: '0.925rem',
              border: '1px solid #cbd5e1',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}