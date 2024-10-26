import './alltemplates.css'; 
import React from 'react';


const Navigation = () => (
  <nav>
    <button>All Templates</button>
    <button>Education</button>
    <button>Support</button>
    <button>Email</button>
    <button>Language</button>
    <button>Writing Assistant</button>
    <button>Other</button>
    <button>Favourites</button>
  </nav>
);

const TemplateCard = ({ title, icon }) => (
  <div className="template-card">
    <div className="header">
      <div className="image-container">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
    <p>
      Impress potential employers with compelling job application emails that stand out from the competition.
    </p>
  </div>
);

const TemplateInterface = () => {
  const templates = [
    { title: 'AIDA Framework', icon: 'https://i.pinimg.com/originals/fa/67/2a/fa672a783d5de2b181827e1cf0fb5ffc.png' },
    { title: 'To-Do List', icon: 'https://i.pinimg.com/originals/35/de/0a/35de0a047f4e826cf4c127f6e542d967.png' },
    { title: 'AIDA Framework', icon: 'https://i.pinimg.com/736x/27/24/06/2724061f64b59e34c364bb7cb031a2b7.jpg' },
    { title: 'To-Do List', icon: 'https://i.pinimg.com/originals/fa/67/2a/fa672a783d5de2b181827e1cf0fb5ffc.png' },
    { title: 'AIDA Framework', icon: 'https://i.pinimg.com/originals/ab/da/a9/abdaa9da6486d37fec5aad7b2aa209d9.png' },
    { title: 'To-Do List', icon: 'https://i.pinimg.com/originals/35/de/0a/35de0a047f4e826cf4c127f6e542d967.png' },
    { title: 'AIDA Framework', icon: 'https://i.pinimg.com/originals/35/de/0a/35de0a047f4e826cf4c127f6e542d967.png' },
    { title: 'To-Do List', icon: 'https://i.pinimg.com/originals/ab/da/a9/abdaa9da6486d37fec5aad7b2aa209d9.png' },
    { title: 'AIDA Framework', icon: 'https://i.pinimg.com/originals/35/de/0a/35de0a047f4e826cf4c127f6e542d967.png' } // Additional box
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="grid-container">
        {templates.map((template, index) => (
          <TemplateCard 
            key={index}
            title={template.title}
            icon={template.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateInterface;
