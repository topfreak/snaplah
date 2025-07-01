import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteChangeTracker from './components/RouteChangeTracker';

import HomePage from './pages/HomePage';
import TentangPage from './pages/TentangPage';
import BerlanggananPage from './pages/BerlanggananPage';
import KontakPage from './pages/KontakPage';

function App() {
  return (
    <>
      <Header />
      <RouteChangeTracker />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/berlangganan" element={<BerlanggananPage />} />
          <Route path="/kontak" element={<KontakPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;