import React, { useState } from 'react';
import onCheckCredentials from '../support/Api'

function Registration({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckCredentials(username, password);
  };

  return (
    
    <div className="form-wrapper">
        <div id="Form" className="form-card">

            <h2>Preapproval Form</h2>
            <h3>Please fill out the details below</h3>

            <form className="form-card" onSubmit={handleSubmit}>
                
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                
                <h3>This is a fun game with little security, please don't use passwords you use elsewhere</h3>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />

                <button className="btn-form" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {submissionMessage && 
                    <div className={submissionSuccess ? "submission-message success" : "submission-message error"}>
                        {submissionMessage}
                    </div>}

            </form>

        </div>

    </div>
  );
}

export default Registration;