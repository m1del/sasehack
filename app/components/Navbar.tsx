"use client";
function Navbar() {
    
    return (
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-img">
              <a className="nav-link" href="/grocerylist">
                <img src="/assets/list.png" alt="" />
              </a>
            </li>
            <li className="nav-img">
              <a className="nav-link" href="/foods">
                <img src="/assets/backpack.png" alt="" />
              </a>
            </li>
            <li className="nav-img">
              <a className="nav-link" href="/recipes">
                <img src="/assets/recipe.png" alt="" />
              </a>
            </li>
            <li className="nav-img">
              <a className="nav-link" href="/profile">
                <img src="/assets/user.png" alt="" />
              </a>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar;