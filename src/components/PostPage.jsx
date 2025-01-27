import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import PostsList from "./PostList";

const PostsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-danger font-bold">Titolo Post</h1>
    </div>
  );
};

export default PostsPage;