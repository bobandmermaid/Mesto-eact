import React from 'react';

function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <p className="footer__copyright">{date.getFullYear()} Mesto by Ilya Podolyak</p>
    </footer>
  )
}

export default Footer;
