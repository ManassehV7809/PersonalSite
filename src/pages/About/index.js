import React from 'react';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function About() {
  const downloadUrl = 'https://firebasestorage.googleapis.com/v0/b/vusani-radzilani.appspot.com/o/resume.pdf?alt=media&token=a42c89a5-8fbd-4f8f-89f3-b2b7cb26948b';
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div class="about-container">
      <div class=" chapters card shadow hoverable">
        <h2 class='headeing'>Chapter 1: The Journey Begins</h2>
        <p class='paragraph'>
          Once upon a time, in a small village nestled in the northern Province of Limpopo, at the heart of Venda, my journey began. As the firstborn in my family, I carried a deep sense of responsibility. Even in my early years, I possessed an insatiable curiosity and an innate love for science and technology. It was a path that would shape my destiny and open doors to a world of endless possibilities.
        </p>
        <p class='paragraph'>
          My decision to choose the science stream was groundbreaking, considering the limited exposure my family had to the sciences. But I was determined to forge my own path, to transcend the limitations of my surroundings. In high school, my academic prowess shone brightly, consistently earning me top marks in my grade for three consecutive years. This extraordinary achievement brought immense pride and joy to my family and community, and I even secured the 11th position among all public schools in the Limpopo province. I was the first in my family to achieve such academic success, and it fueled my burning ambition to pursue higher education and make a difference in the world.
        </p>
        <p class='paragraph'>
          The echoes of my academic achievements reached the ears of the Vice Chancellor at Wits University. Intrigued by my remarkable talents, the Vice Chancellor personally reached out to offer me a scholarship. This moment marked a significant turning point in my journey. With great honor and gratitude, I accepted the offer and became part of the prestigious Moshal Scholarship Program. Not only did I receive financial support, but I also became a member of a vibrant community of individuals from diverse backgrounds, all striving for excellence in their academic pursuits.
        </p>
      </div>

      <div class=" chapters card shadow hoverable">
        <h2 class='headeing'>Chapter 2: Embracing New Horizons</h2>
        <p class='paragraph'>
          Stepping foot into the sprawling campus of Wits University, I was immediately captivated by the grandeur of the city and the endless possibilities that lay before me. The bustling streets, the vibrant mix of cultures, and the harmonious blend of languages like Zulu and Xhosa were all new experiences that expanded my worldview. Immersed in this diverse community, I formed deep and lasting friendships with individuals from various backgrounds. Through sharing and learning from each other's stories, these friendships not only enriched my first-year experience but also became an invaluable support system as we navigated the challenges of university life together.
        </p>
        <p class='paragraph'>
          However, as I entered my second year, new challenges emerged on the horizon. The academic pressure intensified as I delved deeper into my computer science studies. Mathematics, with its intricate complexities, became a formidable component of my coursework, demanding a higher level of dedication and focus. Though initially daunting, I embraced these difficulties head-on, seeking help whenever needed and displaying unwavering determination. This phase of my journey taught me the importance of resilience and perseverance in overcoming obstacles, molding me into a stronger and more tenacious individual.
        </p>
        <p class='paragraph'>
          Now, in my third year, my journey continues to unfold with remarkable adventures. Each day brings new experiences and opportunities for growth. I immerse myself in the world of cutting-edge technologies and frameworks, enhancing my ability to create innovative software solutions. Beyond mere coding and problem-solving, I explore different methodologies that

 broaden my understanding of computer science, enabling me to tackle complex challenges with confidence. This holistic approach equips me with the skills and knowledge to deliver high-quality software solutions that push the boundaries of what's possible.
        </p>
      </div>

      <div class="chapters card shadow hover">
        <h2 class='headeing'>Chapter 3: Cultivating Critical Skills</h2>
        <p class='paragraph'>
          Throughout my extraordinary journey, I have developed and honed critical skills that are essential in the world of technology. These skills extend far beyond technical expertise, encompassing the ability to work independently or collaboratively as part of a team to solve complex problems. I have learned the art of effective communication, enabling me to articulate intricate technical concepts to non-technical stakeholders in a clear and concise manner. Adaptability and a relentless thirst for learning new technologies and frameworks have become second nature to me, as I embrace the ever-evolving landscape of software development.
        </p>
        <p class='paragraph'>
          I have also gained expertise in a wide array of software development tools and methodologies. Version control systems like Git and Mercurial have become my trusted companions, facilitating seamless collaboration and efficient code management. I thrive in Agile/Scrum development environments, where I relish the benefits of iterative development and close collaboration with cross-functional teams. Proficient in software testing and debugging techniques, I consistently deliver high-quality and reliable software solutions that exceed the expectations of end-users.
        </p>
        <p class='paragraph'>
          My journey has also led me to a fulfilling role as a head tutor for computer science at Wits University. In this position, I have the opportunity to impart my knowledge and experiences to first-year students, guiding them as they take their first steps into the world of technology. I endeavor to create a supportive learning environment that fosters curiosity, critical thinking, and personal growth. Through designing engaging assignments, reviewing projects, and providing personalized support, I ensure that each student receives the guidance they need to flourish. This role allows me to give back and inspire future generations, just as I was once inspired by others on my own remarkable journey.
        </p>
        <p class='paragraph'>
          And if you're looking to check out my resume, <a href={downloadUrl} target="_blank">click right here</a>.
        </p>
      </div>

      <div class="contact z-1">
        <div id="section-contact">
          <h2 class='contact-headeing'>Contact</h2>
          <p class='contact-paragraph'>
            Wanna get in touch with me? 
          </p>
          <ul>
            <li>
            <a href="mailto:vusanimradzilani@gmail.com">
  <i className="fas fa-envelope"></i> vusanimradzilani@gmail.com
</a>

            </li>
            <li>
              <a href='tel:+27 82 683 1746'>
              <i className="fas fa-phone"></i>
              +27 82 683 1746
              </a>
            </li>
            <div className='iconsDiv'>
              <li>
                <a href="https://www.linkedin.com/in/vusani-radzilani-609a9323a" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> Vusani Radzilani
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/vusani_radzilani" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> @vusani_radzilani
                </a>
              </li>
            </div>
          </ul>
        
        </div>
      </div>
      <a href="#" className="back-to-top hover" onClick={scrollToTop}>
         Back to top <FontAwesomeIcon icon={faArrowUp}  />
      
        </a>
      
    </div>

    
  );
 
}

export default About;