import React from "react";

export default function AplenicsWebsite() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: 'white', color: '#1e3a8a' }}>
      <header style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <h1>Aplenics</h1>
        <nav>
          <a href="#home" style={{ margin: '0 1rem' }}>Home</a>
          <a href="#about" style={{ margin: '0 1rem' }}>About</a>
          <a href="#products" style={{ margin: '0 1rem' }}>Products</a>
          <a href="#blog" style={{ margin: '0 1rem' }}>Blog</a>
          <a href="#contact" style={{ margin: '0 1rem' }}>Contact</a>
        </nav>
      </header>

      <section id="home" style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Tech Solutions for the Modern World</h2>
        <p>Discover cutting-edge gadgets, expert tech insights, and tailored services for your digital lifestyle.</p>
      </section>

      <section id="about" style={{ padding: '2rem', backgroundColor: '#eff6ff' }}>
        <h2>About Us</h2>
        <p>Aplenics is a forward-thinking tech company providing innovative solutions and insightful content to help you stay ahead in the digital world.</p>
      </section>

      <section id="products" style={{ padding: '2rem' }}>
        <h2>Our Products</h2>
        <ul>
          <li><strong>Smartwatch</strong>: Track your fitness and stay connected on the go.</li>
          <li><strong>Wireless Earbuds</strong>: Immersive sound experience without the wires.</li>
          <li><strong>Portable Charger</strong>: Stay powered up anytime, anywhere.</li>
        </ul>
      </section>

      <section id="blog" style={{ padding: '2rem', backgroundColor: '#eff6ff' }}>
        <h2>Latest Blog Posts</h2>
        <ul>
          <li><strong>Top 5 Gadgets of 2025</strong>: Explore our expert picks for must-have tech gear.</li>
          <li><strong>How to Choose the Right Laptop</strong>: A complete guide for students, professionals, and gamers.</li>
        </ul>
      </section>

      <section id="contact" style={{ padding: '2rem' }}>
        <h2>Contact Us</h2>
        <form style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', padding: '1rem' }}>
        &copy; 2025 Aplenics. All rights reserved.
      </footer>
    </div>
  );
}