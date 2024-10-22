import React from 'react';
import './footer.css';

const Footer = () => {
  const footerItems = [
    { text: 'FAQ', link: '#' },
    { text: 'Terms', link: '#' },
    { text: 'AI Policy', link: '#' },
    { text: 'Privacy', link: '#' },
    { text: 'Supportiyo', link: '#', external: true },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <nav className="nav">
          {footerItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="divider"></div>
              )}
              <a
                href={item.link}
                className="link"
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
              >
                {item.text}
                {item.external && (
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </a>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
