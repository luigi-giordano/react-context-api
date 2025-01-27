import { useContext } from "react";
import { PostsContext } from "./PostsContext";
import PostsList from "./PostsList";

const PostsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-danger font-bold">Posts</h1>
      <PostsList />
    </div>
  );
};

export default PostsPage;