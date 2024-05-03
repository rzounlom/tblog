import "./Navbar.css";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">MTB</Link>
      </div>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>{/* <CreatePostModal /> */} TODO</li>
      </ul>
    </nav>
  );
}

export default Nav;
