// Resume.js

import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>Aniketh Nayak N</h1>
        <p>Full-Stack Web Developer</p>
      </header>
      <section className="contact">
        <h2>Contact Information</h2>
        <p>Email: nayakaniketh970@gmail.com</p>
        <p>Phone: 6361822428</p>
        <p>LinkedIn: Aniketh Nayak N</p>
        <p>Github: Aniketh197</p>
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>
          <strong>Vishweshvaraih Technological University</strong>, Bachelor in Computer Science and Engineering, 2025
        </p>
      </section>
      <section className="experience">
        <h2>Fresher</h2>
        <ul>
          <li>FreeCode Camp Certification</li>
          <li>Intern at Rooloo Innovations</li>
        </ul>
      </section>
      <section className="skills">
        <h2>Skills</h2>
          <p>JavaScript (React, Node.js)</p>
          <p>HTML5, CSS3</p>
          <p>Git, GitHub</p>
          <p>Responsive Web Design</p>
      </section>
    </div>
  );
};

export default Resume;
