"use client";
import { IconContext } from "react-icons";
import { IoAddOutline } from "react-icons/io5";

function TopBar({ page }) {
  const headerSize = page.includes("Kitchen") ? "3rem" : "3.8rem";
  return (
    <nav className="top-bar">
      <h1 className="top-header" style={{ fontSize: headerSize }}>
        {page}
      </h1>
      {page.includes("Kitchen") && (
        <div className="top-list">
          <a href="/foods">
            <button>All</button>
          </a>
          <a href="/foods/pantry">
            <button>Pantry</button>
          </a>
          <a href="/foods/fridge">
            <button>Fridge</button>
          </a>
          <a href="/foods/freezer">
            <button>Freezer</button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default TopBar;
