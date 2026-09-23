import { Navigation } from './components/navigation/Navigation'
import { Hero } from './components/sections/Hero'
import { CapabilityStrip } from './components/sections/CapabilityStrip'
import { About } from './components/sections/About'
import { ExperienceSection } from './components/sections/Experience'
import { Proof } from './components/sections/Proof'
import { SelectedWork } from './components/sections/SelectedWork'
import { Writing } from './components/sections/Writing'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Navigation />

      <main id="main-content">
        <Hero />
        <CapabilityStrip />
        <About />
        <ExperienceSection />
        <Proof />
        <SelectedWork />
        <Writing />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="footer-identity">
          <strong>Derek McDonell</strong>
          <span>
            IT Support · Systems · Networking · Hardware
          </span>
        </div>

        <p className="footer-statement">
          Systems, networks, hardware, and technical work.
        </p>

        <span className="footer-meta">
          © 2026 Derek McDonell
        </span>
      </footer>
    </>
  )
}

export default App
