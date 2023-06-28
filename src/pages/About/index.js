import React from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
  const downloadUrl = 'gs://vusani-radzilani.appspot.com/resumeVusaniRadzilani.pdf';

  return (
    <div className="about-container">
      <div className="exp">
        <div className="card" id="section-experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Head Tutor | Wits University | Feb 2023 - Present</strong>
              <ul>
                <li>
                  Instructed first-year computer science students in programming languages such as Python and C++, as well as algorithms.
                </li>
                <li>
                  Ensured course quality control and fairness by designing and reviewing assignments, exams, and projects.
                </li>
                <li>
                  Cultivated a supportive learning environment that fostered questioning and growth, encouraging students to explore their curiosity and think critically.
                </li>
                <li>
                  Regularly assessed student progress and adjusted teaching approaches to accommodate different learning styles and address individual needs.
                </li>
              </ul>
            </li>
            <li>
              <strong>GTS Tutor | Wits University | Feb 2023 - March 2023</strong>
              <ul>
                <li>
                  Equipped first-year students with essential computer and Microsoft 365 skills, including learning management system (LMS) management.
                </li>
                <li>
                  Delivered a comprehensive program tailored to address individual student needs, ensuring a smooth transition into university life and academics.
                </li>
                <li>
                  Provided personalized support to help students overcome challenges and build confidence in their technical abilities.
                </li>
                <li>
                  Enhanced student satisfaction and facilitated their success in their academic careers by organizing workshops and study sessions.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="skills">
        <div id="section-skills">
          <h2>Skills</h2>
          <ul>
            <li>
              Strong technical skills:
            </li>
            <ul>
              <li>Proficient in programming languages such as Python, C++, and Java.</li>
              <li>Experience with modern technologies and frameworks, including ReactJS and Flutter.</li>
            </ul>
            <li>
              Familiarity with software development tools and methodologies:
            </li>
            <ul>
              <li>Expertise in version control systems like Git and Mercurial.</li>
              <li>Experience working in an Agile/Scrum development environment.</li>
              <li>Proficient in software testing and debugging techniques.</li>
            </ul>
            <li>
              Ability to work independently or as part of a team to solve complex problems and deliver high-quality software solutions.
            </li>
            <li>
              Excellent communication and interpersonal skills, including the ability to explain technical concepts to non-technical stakeholders effectively.
            </li>
            <li>
              Proven adaptability and a willingness to learn and apply new technologies and frameworks to stay current in the field of software development.
            </li>
          </ul>
          <p>
            Please click <a href={downloadUrl} download="resumeVusaniRadzilani.pdf">here</a> to download a PDF version of my resume.
          </p>
        </div>
      </div>

      <div className="contact">
        <div id="section-contact">
          <h2>Contact</h2>
          <p>
            If you would like to get in touch with me, please feel free to reach out using the contact information below:
          </p>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> vusanimradzilani@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i> +27 82 683 1746
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
    </div>
  );
}

export default About;
