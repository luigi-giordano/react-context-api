import { useContext } from "react";
import { PostsContext } from "./PostsContext";

const PostsList = () => {
  const { posts } = useContext(PostsContext);

  return (
    <ul className="mt-4 space-y-2">
      {posts.map((post, index) => (
        <li key={index} className="p-2 border rounded-lg">
          {post}
        </li>
      ))}
    </ul>
  );
};

export default PostsList;