import NavBar from '../components/NavBar'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function Portfolio() {
  return (
    <>
      <NavBar />
      <main className='mr-20 h-full lg:mr-0 lg:mb-20 flex flex-col min2xl:justify-center'>
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
