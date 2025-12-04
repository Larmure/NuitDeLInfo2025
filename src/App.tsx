import { useState } from 'react';
import { FiMenu, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      {/* Bouton de basculement du menu */}
      <button 
        className="toggle-btn"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        style={{
          left: isSidebarOpen ? 'calc(250px - 18px)' : '20px',
          transition: 'left 0.3s ease'
        }}
      >
        {isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
      </button>

      {/* Barre de navigation latérale */}
      <nav className={`navbar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="navbar-header">
          <h1>Team Baobab</h1>
        </div>
        <div className="nav-links">
          {/* Vous pouvez ajouter des liens ici plus tard */}
        </div>
      </nav>

      {/* Contenu principal */}
      <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <div className="card">
          <h2>Bienvenue sur Team Baobab</h2>
          <p>Ceci est le contenu principal de votre application.</p>
          
          <button onClick={() => setCount((count) => count + 1)}>
            Compteur : {count}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;