import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import { initializeApp } from 'firebase/app';
import { config } from './config/config.ts';
import AuthRoute from './components/AuthRoute.tsx';

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <AuthRoute>
              <Home />
            </AuthRoute>
            } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
