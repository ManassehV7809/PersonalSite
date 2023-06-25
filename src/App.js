
import './App.css';
import corparate from './assets/corparate.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App">
   <>
   <div className='introPic'>
   <img src={corparate} alt="A picture of Vusani"></img>

</div>
   <div className='intro'>
   <h2 strong>From me to you...</h2>
     

<p>Ndau ya nduna! I'm Vusani Radzilani, a passionate individual with a strong affinity for the world of technology. Currently pursuing my studies in Computer Science, I am driven to [Goal or Mission Statement].

Throughout my educational journey, I have acquired valuable expertise in various areas such as [Specific Skills or Expertise]. I hold steadfast to [Your Key Values or Principles] as guiding principles in everything I do.

Welcome to my personal website, where you can delve into my professional background, explore the projects I have undertaken, and witness my unwavering commitment to continuous growth in the [Industry or Field]. Join me on this exciting journey as we uncover my achievements and aspirations.
Thank you for taking the time to visit, and I sincerely hope you enjoy learning more about who I am and the value I bring.
</p>
<p>Best regards,</p>

<p>Vusani Radzilani</p>
  

</div>
<div className="exp">
<div card id="section-experience">
<h2>Experience</h2>
<ul>
  <li>
    <strong>Head Tutor | Wits University | Feb 2023 - Present</strong>
    <ul>
      <li>Teach first-year computer science students programming in Python and C++ as well as algorithms.</li>
      <li>Ensure course quality control and fairness.</li>
      <li>Foster a supportive learning environment that encourages questions and growth.</li>
      <li>Regularly assess student progress and adjust teaching approach as needed.</li>
    </ul>
  </li>
  <li>
    <strong>GTS Tutor | Wits University | Feb 2023 - March 2023</strong>
    <ul>
      <li>Equip first-year students with basic computer and Microsoft 365 skills and LMS management.</li>
      <li>Deliver a comprehensive program tailored to student needs.</li>
      <li>Provide individualized support to help students overcome challenges and gain confidence.</li>
      <li>Increased student satisfaction and set them up for success in their academic careers.</li>
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

<p>Please click <a href="./assets/resumeVusaniRadzilani.pdf" download>here </a>
to download a pdf version of my resume.</p>
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

