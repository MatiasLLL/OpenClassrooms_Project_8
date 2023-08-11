import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
// import './i18n'


function Portfolio() {
  return (
    <>
      <NavBar />
      <main className='mr-20 h-full bg-color11/50 sm:mr-0 sm:mb-20 text-color9'>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default Portfolio
