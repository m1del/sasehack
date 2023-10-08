import { IconContext } from "react-icons";
import { IoAddOutline } from "react-icons/io5";

function TopBar({ page }) {
  return (
    <nav className="top-bar">
      <h1 className="top-header">{page}</h1>
      {page == "Kitchen" && (
        <div className="top-list">
          <button>All</button>
          <button>Freezer</button>
          <button>Fridge</button>
          <button>Pantry</button>
          <IconContext.Provider value={{ color: "white", size: "2.4rem" }}>
            <div>
              <IoAddOutline />
            </div>
          </IconContext.Provider>
        </div>
      )}
    </nav>
  );
}

export default TopBar;
