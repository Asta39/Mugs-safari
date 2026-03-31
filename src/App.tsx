import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Safaris from './pages/Safaris';
import Destinations from './pages/Destinations';
import Experiences from './pages/Experiences';
import About from './pages/About';
import Contact from './pages/Contact';
import SafariDetail from './pages/SafariDetail';
import DestinationDetail from './pages/DestinationDetail';
import ExperienceDetail from './pages/ExperienceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="safaris" element={<Safaris />} />
          <Route path="safaris/:id" element={<SafariDetail />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:id" element={<DestinationDetail />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="experiences/:id" element={<ExperienceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

