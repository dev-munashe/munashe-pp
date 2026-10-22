import React, { useEffect, useState } from 'react'
import './cookie-consent.css'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(localStorage.getItem('cookie-consent') !== 'accepted')
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <aside className='cookie-consent' role='dialog' aria-label='Cookie notice'>
      <div>
        <h3>Cookie notice</h3>
        <p>
          This site uses cookies and similar technologies for analytics and advertising.
          Read the <a href='#privacy'>Privacy Policy</a> for details.
        </p>
      </div>
      <button type='button' className='btn btn-primary' onClick={acceptCookies}>
        Accept
      </button>
    </aside>
  )
}

export default CookieConsent
