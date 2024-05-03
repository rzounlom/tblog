// postService

const API_URL = "https://6554b47463cafc694fe6d455.mockapi.io/posts";

// Get all posts
export const getPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
