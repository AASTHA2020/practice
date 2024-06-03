// HOME.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import ABOUT from './ABOUT';
import BLOG from './BLOG';
import CONTACT from './CONTACT';
import Header from './Header';

function HOME() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Main />} ></Route>
          <Route path="/ABOUT" element={<ABOUT />} ></Route>
          <Route path="/BLOG" element={<BLOG />} ></Route>
          <Route path="/CONTACT" element={<CONTACT />}></Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default HOME;
