import './App.css'
import Home from './pages/Home/index'
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/Login/components';

interface ThemeContextType {
  theme: string;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  return (
    <div className="app">
      <ThemeContext.Provider value={{ changeTheme, theme }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
