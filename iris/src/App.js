import React from 'react';
import Header2 from './Headers/header2';
import Footer from './Footers/footer';
import AllTemplates from './Templates/alltemplates'
import './App.css';  


function App() {
  return (
    <div className="app-container">
      <Header2 />  
      <main className="main-content">
      <AllTemplates />  
        
      </main>
      <Footer />
    </div>
  );
}

export default App;