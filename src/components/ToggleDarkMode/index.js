/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import '../../styles/global.css';
import { IconCheckbox } from 'react-icon-checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ToggleDarkMode() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <span className="toggleIcon">
          <IconCheckbox
            type="checkbox"
            onClick={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
            checkedIcon={<FontAwesomeIcon icon={faMoon} />}
            uncheckedIcon={<FontAwesomeIcon icon={faSun} />}
          />
        </span>
      )}
    </ThemeToggler>
  );
}
