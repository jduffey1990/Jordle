import React, { useState, useEffect } from 'react';
import { pingBackend } from '../support/Api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await pingBackend();
      } catch (error) {
        console.error('Failed to ping backend:', error);
      }
    })();
  }, []);

  const onRegister = async (username, password) => {
    setIsSubmitting(true);
    setSubmissionMessage('');
    setSubmissionSuccess(false);
    try {
      // Here, you should make the API call to register the user.
      // For example, using fetch or axios:
      // const response = await axios.post('/api/register', { username, password });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmissionMessage('Registration successful!');
      setSubmissionSuccess(true);
    } catch (error) {
      setSubmissionMessage('Registration failed. Please try again.');
      setSubmissionSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(username, password);
  };

  return (
    <div className="form-wrapper">
      <div id="Form" className="form-card">
        <h2>Preapproval Form</h2>
        <h3>Please fill out the details below</h3>

        <form className="form-card" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button className="btn-form" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {submissionMessage && (
            <div
              className={
                submissionSuccess ? 'submission-message success' : 'submission-message error'
              }
            >
              {submissionMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;