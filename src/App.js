import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import User from './pages/User';
import ChangeBook from './pages/ChangeBook';
import TopBooks from './pages/TopBooks';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
          <Route path="/change-book" element={<ChangeBook />} />
          <Route path="/top-100" element={<TopBooks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
