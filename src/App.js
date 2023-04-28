import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/ShopBag';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import User from './pages/User';
import ShopBag from './pages/ShopBag';
import ChangeBook from './pages/ChangeBook';
import TopBooks from './pages/TopBooks';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopbag" element={<ShopBag />} />
        <Route path="/user" element={<User />} />
        <Route path="/change-book" element={<ChangeBook />} />
        <Route path="/top-100" element={<TopBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
