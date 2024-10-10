import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
