import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#333' }}>About Us</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>Your go-to solution for straightforward and private URL shortening.</p>
      </header>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', color: '#444' }}>Our Mission</h2>
        <p>
          At <strong>BitLinks</strong>, we aim to make URL shortening simple, fast, and secure. We believe in
          respecting your privacy and providing a service that you can trust without worrying about being tracked
          or sharing unnecessary personal information.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', color: '#444' }}>Why Choose Us?</h2>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
          <li>No tracking or intrusive data collection</li>
          <li>Simple and intuitive interface</li>
          <li>Fast and reliable service</li>
          <li>Completely free to use</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '28px', color: '#444' }}>Our Promise</h2>
        <p>
          We understand how important your privacy and time are. That’s why we’ve built a service that puts you first.
          With <strong>BitLinks</strong>, you can focus on what matters most without worrying about complex
          processes or hidden terms.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;




