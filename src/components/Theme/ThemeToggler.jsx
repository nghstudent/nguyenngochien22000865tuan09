import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`app ${theme}`}>
      <h2>Toggle Theme</h2>
      <button onClick={handleToggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggler;
