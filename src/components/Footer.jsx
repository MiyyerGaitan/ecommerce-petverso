import React from 'react';
import { Facebook, Smartphone } from 'react-feather'; // Import icons
import '../styles/test.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <a href="https://www.facebook.com/profile.php?id=61569015359891" target="_blank" rel="noopener noreferrer">
            <Facebook style={{vericalAlign:"-0.1em"}} />
          </a>
          <a href="https://wa.me/+573219853358" target="_blank" rel="noopener noreferrer">
            <Smartphone style={{vericalAlign:"-0.1em"}} />
          </a>
          <p>Contáctenos: <a href="mailto:versopet026@gmail.com">versopet026@gmail.com</a></p>
          <p>&copy; {new Date().getFullYear()} PetVerso. Todos los derechos reservados.</p>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
