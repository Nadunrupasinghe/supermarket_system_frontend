import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/Landing Page/LandingPage';
import SignUpPage from './Pages/SignUp Page/SignUpPage';

function App() {
  return (
    <div className='App'>
      {
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<LandingPage />} /> */}
            <Route path='/' element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
