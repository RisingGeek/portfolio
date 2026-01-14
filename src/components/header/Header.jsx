import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import {
  greeting,
  workExperiences,
  skillsSection,
  projects,
  openSource,
  blogSection,
} from '../../portfolio';

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewBlog = blogSection.display;

  return (
    <Headroom>
      <header className={isDark ? 'dark-menu header' : 'header'}>
        <div className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span className={isDark ? 'navicon navicon-dark' : 'navicon'}></span>
        </label>
        <ul className={isDark ? 'dark-menu-ul menu' : 'menu'}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}
          {
            projects && (
              <li>
                <a href="#projects">Projects</a>
              </li>
            )
          }
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="/">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
