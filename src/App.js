import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch } from "react-router-dom";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/single-post/SinglePost";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/posts/:postId" render={() => <SinglePost />} />
        <Route exact path="/posts" render={() => <Posts />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
