import React from 'react';
import './feedback.css';

const Feedback = () => {
  return (
    <div className="feedback-form-container" style={{ marginTop: "80px" }}> {}
      <h2>We'd Love Your Feedback</h2>
      <iframe
        id="feedback-form-iframe"
        src="https://forms.gle/fJcn8QcFhHqSxfjc7"
        width="100%"
        height="1600"
        style={{ border: "none" }}
        title="Feedback Form"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Feedback;
