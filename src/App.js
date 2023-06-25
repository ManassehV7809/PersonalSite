
import './App.css';
import corparate from './assets/corparate.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App">
   <>
   <div className='introPic'>
   <img src={corparate} alt="A picture of Vusani" style={{ maxWidth: '100%', height:'20%' }} />


</div>
   <div className='intro'>
   <h2 strong>From me to you...</h2>
     

   <div>
      <h1>Ndau ya nduna!</h1>
      <p>I'm Vusani Radzilani, a passionate individual with a strong affinity for the world of technology. Currently pursuing my studies in Computer Science, I am driven to stay at the forefront of innovation and make a positive impact in the field.</p>
      <p>Throughout my educational journey, I have acquired valuable skills and knowledge in various areas, including programming languages such as Python, C++, and Java. I have also gained hands-on experience with technologies like ReactJS and Flutter, further expanding my technical toolkit.</p>
      <p>As an adaptable and ambitious individual, I thrive in challenging environments and enjoy tackling complex problems. I believe that continuous learning and staying abreast of the latest industry trends are crucial for success in the ever-evolving world of technology.</p>
      <p>On this website, you will find insights into my professional background, the projects I have undertaken, and my relentless pursuit of knowledge in the field of Computer Science. Join me on this exciting journey as we explore my accomplishments and aspirations.</p>
      <p>Thank you for visiting, and I invite you to connect with me to discuss collaboration opportunities or share insights in the world of technology.</p>
      <p>Ndo livhuwa,</p>
      <p>Vusani Radzilani</p>
    </div>
  

</div>
<div className="exp">
      <div className="card" id="section-experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Head Tutor | Wits University | Feb 2023 - Present</strong>
            <ul>
              <li>Instructed first-year computer science students in programming languages such as Python and C++, as well as algorithms.</li>
              <li>Ensured course quality control and fairness.</li>
              <li>Cultivated a supportive learning environment that fostered questioning and growth.</li>
              <li>Regularly assessed student progress and adjusted teaching approach as needed.</li>
            </ul>
          </li>
          <li>
            <strong>GTS Tutor | Wits University | Feb 2023 - March 2023</strong>
            <ul>
              <li>Equipped first-year students with essential computer and Microsoft 365 skills, including LMS management.</li>
              <li>Delivered a comprehensive program tailored to address individual student needs.</li>
              <li>Provided personalized support to help students overcome challenges and build confidence.</li>
              <li>Enhanced student satisfaction and facilitated their success in their academic careers.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="skills">
      <div id="section-skills">
        <h2>Skills</h2>
        <ul>
          <li>Strong technical skills:</li>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li>Technologies such as ReactJS and Flutter</li>
          </ul>
          <li>Familiarity with software development tools and methodologies:</li>
          <ul>
            <li>Version control systems</li>
            <li>Agile/Scrum</li>
            <li>Testing</li>
          </ul>
          <li>Ability to work independently or as part of a team to solve complex problems and deliver high-quality software solutions.</li>
          <li>Excellent communication and interpersonal skills, including the ability to explain technical concepts to non-technical stakeholders.</li>
          <li>Adaptability and a willingness to learn and apply new technologies and frameworks as needed to stay current in the field.</li>
        </ul>
        <p>Please click <a href="./assets/resumeVusaniRadzilani.pdf" download="resumeVusaniRadzilani.pdf">here</a> to download a PDF version of my resume.</p>
      </div>
    </div>
<div className="contact">
<div id="section-contact">
<h2>Contact</h2>
<p>If you would like to get in touch with me, please feel free to reach out using the contact information below:</p>
<ul>
<li><i className="fas fa-envelope"></i> Email: vusanimradzilani@gmail.com</li>
          <li><i className="fas fa-phone"></i> Phone: +27 82 683 1746</li>
          <li><a href="https://www.linkedin.com/in/vusani-radzilani-609a9323a" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          <li><a href="https://www.instagram.com/vusani_radzilani" target="_blank"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
</div>
</div>

    </>
    </div>
  );

}

export default App;

