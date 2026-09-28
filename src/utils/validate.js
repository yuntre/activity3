export const validateStudentForm = (formData) => {
  const errors = {};

  // 1. Student ID
  if (!formData.studentId || !formData.studentId.trim()) {
    errors.studentId = 'Student ID is required.';
  } else if (!/^\d{4}-\d{4}$/.test(formData.studentId.trim())) {
    errors.studentId = 'Format must be YYYY-NNNN (e.g., 2024-0001).';
  }

  // 2. Full Name
  if (!formData.name || !formData.name.trim()) {
    errors.name = 'Full name is required.';
  }

  // 3. Email Address
  if (!formData.email || !formData.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // 4. Course / Program
  if (!formData.course || !formData.course.trim()) {
    errors.course = 'Course/Program is required.';
  }

  // 5. Year Level
  if (!formData.year) {
    errors.year = 'Year level is required.';
  }

  return errors;
};