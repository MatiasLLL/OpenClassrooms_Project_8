import pic from '../../assets/photo-potfolio.jpg'

function About() {
    return (
      <section id="about" className='flex flex-row justify-around mx-12 my-7'>
        <img src={pic} alt='photo portfolio' className='w-1/3'/>
        <p className='w-1/3'>At 26 now, I know I found my path into coding.
           With a really varied background, from restoration, event setup or even urban farming; I grew a lot as a human being and I'm glad to have acquired many skills that I can use into Web Development !
           Solving problems and building solutions, by myself or with teammates; as much as having a creative mindset and a strong attention to detail; are skills that become part of me now.
           That builds my thirst for learning and mastering new technologies, coding languages or frameworks. Each new day is a new challenge !
        </p>
      </section>
    )
}

export default About