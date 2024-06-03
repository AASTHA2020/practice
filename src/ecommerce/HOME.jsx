// HOME.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import ABOUT from './ABOUT';
import BLOG from './BLOG';
import CONTACT from './CONTACT';

function HOME() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} ></Route>
          <Route path="/ABOUT" element={<ABOUT />} ></Route>
          <Route path="/BLOG" element={<BLOG />} ></Route>
          <Route path="/CONTACT" element={<CONTACT />}></Route>
        </Routes>
      </BrowserRouter>
      <Main />
    </>
  );
}

export default HOME;
