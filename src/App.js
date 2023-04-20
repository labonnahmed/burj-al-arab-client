import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './components/book/Book';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import PrivateOutlate from './components/PrivateOutlate';

export const webContent = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <webContent.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<PrivateOutlate />}>
            <Route path='book' element={<Book />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </webContent.Provider>
  );
}

export default App;
