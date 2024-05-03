import "./Posts.css";

import { useEffect, useState } from "react";

import PostList from "./PostList";
import { Spinner } from "react-bootstrap";
// import { defaultPosts } from "../../data/posts";
import { getPosts } from "../../services/postsService";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const posts = await getPosts();
      // console.log(posts);
      setPosts(posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default Posts;
