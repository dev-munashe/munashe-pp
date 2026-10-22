import React from 'react'
import './privacy.css'

const PrivacyPolicy = () => {
  return (
    <section id='privacy' className='privacy-policy'>
      <h5>Legal</h5>
      <h2>Privacy Policy</h2>

      <div className='container privacy-policy__content'>
        <p>
          This portfolio collects information you choose to submit through the contact form,
          such as your name, email address, and message. It is used only to respond to your enquiry.
        </p>
        <p>
          The site uses Microsoft Clarity for anonymous usage analytics and Google AdSense for
          advertising. These services may use cookies or similar technologies according to their
          own privacy policies.
        </p>
        <p>
          Your information is not sold. For questions about your data, contact
          <a href='mailto:munashetandabantu@gmail.com'> munashetandabantu@gmail.com</a>.
        </p>
        <small>Last updated: October 22, 2026</small>
      </div>
    </section>
  )
}

export default PrivacyPolicy
