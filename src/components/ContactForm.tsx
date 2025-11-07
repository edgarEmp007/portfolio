// src/components/ContactForm.tsx
'use client';

import { useState, FormEvent } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import styles from './ContactForm.module.css';
import homeStyles from '@/app/HomePage.module.css'; // Re-use button style

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactForm = () => {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Get the API URL from the environment variable
    const apiEndpoint = process.env.NEXT_PUBLIC_EMAIL_API_URL;

    if (!apiEndpoint) {
      console.error('Email API URL is not defined.');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={homeStyles.sectionTitle}>{t.contactForm.title}</h2>
      <p className={homeStyles.sectionDescription}>
        {t.contactForm.description}
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            {t.contactForm.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            {t.contactForm.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            {t.contactForm.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={styles.textarea}
          />
        </div>
        <input type='hidden' name="locale" id="locale" value={t.lang}/>

        <div className={styles.buttonContainer}>
          <button
            type="submit"
            className={homeStyles.exploreButton}
            disabled={status === 'sending'}
          >
            {status === 'sending'
              ? t.contactForm.sendingText
              : t.contactForm.sendButton}
          </button>
        </div>
      </form>

      {/* Submission Status Messages */}
      {status === 'success' && (
        <p className={styles.statusMessageSuccess}>
          {t.contactForm.successMessage}
        </p>
      )}
      {status === 'error' && (
        <p className={styles.statusMessageError}>
          {t.contactForm.errorMessage}
        </p>
      )}
    </div>
  );
};

export default ContactForm;