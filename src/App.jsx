import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Education     from './components/Education'
import Certifications from './components/Certifications'
import Projects      from './components/Projects'
import Experience    from './components/Experience'
import Contact       from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '22px',
        borderTop: '1px solid var(--border)',
        fontSize: 13,
        color: 'var(--dim)',
      }}>
        Built with ❤️ by{' '}
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Vivek Jadhav</span>
        {' '}· {new Date().getFullYear()}
      </footer>
    </>
  )
}
