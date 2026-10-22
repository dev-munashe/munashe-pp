import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import PrivacyPolicy from './components/privacy/PrivacyPolicy'
import CookieConsent from './components/cookie-consent/CookieConsent'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonial />
      <Contact />
      <PrivacyPolicy />
      <Footer />
      <CookieConsent />
    </>
  )
}

export default App