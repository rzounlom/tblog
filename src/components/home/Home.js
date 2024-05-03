import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome To My Travel Blog</h1>
      <Link to="/posts">
        <button>Let's Go Places</button>
      </Link>
    </div>
  );
}

export default Home;
