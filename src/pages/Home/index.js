import React from 'react';
import corparate from '../../assets/corparate.jpg'
import './index.css'


function Home(){
    return(
  <div className="home-container">
   
    <div className='introPic'>
      <img src={corparate} alt="A picture of Vusani" className="profile-image" />
    </div>
    <div className='intro'>
      <h2><strong> Ndau ya nduna!</strong></h2>
      <div>
  
        <p>I'm Vusani Radzilani, a passionate individual with a strong affinity for the world of technology. Currently pursuing my studies in Computer Science, I am driven to stay at the forefront of innovation and make a positive impact in the field.</p>
        <p>Throughout my educational journey, I have acquired valuable skills and knowledge in various areas, including programming languages such as Python, C++, and Java. I have also gained hands-on experience with technologies like ReactJS and Flutter, further expanding my technical toolkit.</p>
        <p>As an adaptable and ambitious individual, I thrive in challenging environments and enjoy tackling complex problems. I believe that continuous learning and staying abreast of the latest industry trends are crucial for success in the ever-evolving world of technology.</p>
        <p>On this website, you will find insights into my professional background, the projects I have undertaken, and my relentless pursuit of knowledge in the field of Computer Science. Join me on this exciting journey as we explore my accomplishments and aspirations.</p>
        <p>Thank you for visiting, and I invite you to connect with me to discuss collaboration opportunities or share insights in the world of technology.</p>
        <p>Ndo livhuwa,</p>
        <p>Vusani Radzilani</p>
      </div>
    </div>
  </div>
);
    }
export default Home