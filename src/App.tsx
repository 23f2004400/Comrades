import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import WelcomeTutorial from './components/WelcomeTutorial';
import Homepage from './components/Homepage';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Check if user is visiting for the first time
    const hasVisited = localStorage.getItem('safeguard-visited');
    if (!hasVisited) {
      setTimeout(() => {
        setShowTutorial(true);
      }, 1500); // Show tutorial after 1.5 seconds
    }
  }, []);

  const handleTutorialClose = () => {
    setShowTutorial(false);
    localStorage.setItem('safeguard-visited', 'true');
  };

  const handleAuthOpen = () => {
    setShowAuth(true);
  };

  const handleAuthClose = () => {
    setShowAuth(false);
  };

  const renderCurrentPage = () => {
    if (showAuth) {
      return <Auth onBack={handleAuthClose} />;
    }

    switch (currentPage) {
      case 'features':
        return <Features />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Homepage />;
    }
  };

  return (
    <>
      <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {!showAuth && (
          <Header 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            onAuthClick={handleAuthOpen}
          />
        )}
        <main className="transition-all duration-500 ease-in-out">
          {renderCurrentPage()}
        </main>
        {!showAuth && <Footer setCurrentPage={setCurrentPage} />}
      </div>

      {/* Welcome Tutorial Overlay */}
      {showTutorial && (
        <WelcomeTutorial onClose={handleTutorialClose} />
      )}
    </>
  );
}

export default App;