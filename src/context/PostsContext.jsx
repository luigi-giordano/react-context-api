import { createContext, useState, useContext } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {


  return (
    <PostsContext.Provider>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext };