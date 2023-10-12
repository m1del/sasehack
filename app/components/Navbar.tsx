"use client";
import { useEffect, useState } from 'react';

function Navbar() {
  const [logoClass, setLogoClass] = useState('');

  useEffect(() => {
    // Ensure window is defined
    if (typeof window !== 'undefined') {
      // Check if the current URL path is '/'
      if (window.location.pathname === '/') {
        setLogoClass('fadeIn');
      }
    }
  }, []);
    
    return (
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className={`nav-img ${logoClass}`}>
              <a className="nav-link" href="/grocerylist">
                <img src="/assets/list.png" alt=""/>
              </a>
            </li>
            <li className={`nav-img ${logoClass}`}>
              <a className="nav-link" href="/foods">
                <img src="/assets/backpack.png" alt="" />
              </a>
            </li>
            <li className={`nav-img ${logoClass}`}>
              <a className="nav-link" href="/recipes">
                <img src="/assets/recipe.png" alt="" />
              </a>
            </li>
            <li className={`nav-img ${logoClass}`}>
              <a className="nav-link" href="/profile">
                <img src="/assets/user.png" alt="" />
              </a>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar;