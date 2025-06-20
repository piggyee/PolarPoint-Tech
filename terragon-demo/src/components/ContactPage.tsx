// src/components/ContactPage.tsx
import React from 'react'
import './ContactPage.scss'

const ContactPage: React.FC = () => (
  <section className="contact">
    <div className="contact__left">
      <h2>Contact us</h2>
      <p>
        We’d love to hear from you! Send us your questions, feedback, or just say hi—
        we’ll get back to you soon.
      </p>
      <p>
        Alternatively, email us at{' '}
        <a href="mailto:hello@PolarPoint.tech">hello@PolarPoint.tech</a>
      </p>
    </div>
    <form className="contact__form">
      <label>
        Name*
        <input type="text" required />
      </label>
      <label>
        Email*
        <input type="email" required />
      </label>
      <label>
        Phone
        <input type="tel" />
      </label>
      <label>
        Message*
        <textarea required rows={4} />
      </label>

      {/* 同意條款說明 */}
      <p className="contact__consent-text">
        We will require your consent to collect and process your personal contact data
        in accordance with our Privacy Policy. We will also require your consent to
        provide you with marketing-related information.
      </p>

      {/* 同意條款勾選 */}
      <div className="contact__consents">
        <label htmlFor="agreePrivacy">
          <input id="agreePrivacy" type="checkbox" required />
          I agree to the Privacy Policy
        </label>
        <label htmlFor="agreeMarketing">
          <input id="agreeMarketing" type="checkbox" />
          I’d like to receive marketing information
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </section>
)

export default ContactPage
