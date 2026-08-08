import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, BackgroundBlobs, BackToTopButton } from './components';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';

import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="relative bg-slate-900 text-white min-h-screen flex flex-col overflow-x-hidden">
        <BackgroundBlobs />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
