import { createContext, useState, useContext } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(["Post 1", "Post 2", "Post 3"]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext };