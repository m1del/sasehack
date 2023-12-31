import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-page">
          <div>{children}</div>
        </div>
        <Navbar/>
        {/* <nav className="nav-bar">
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
        </nav> */}
      </body>
    </html>
  );
}
