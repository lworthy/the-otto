import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {submitted && <p className="success">Message sent! We'll get back to you soon.</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
