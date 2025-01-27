import { createContext, useState, useContext } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", content: "This is the content of post 1" },
    { id: 2, title: "Post 2", content: "This is the content of post 2" },
    { id: 3, title: "Post 3", content: "This is the content of post 3" },
  ]);

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext, PostsContext };