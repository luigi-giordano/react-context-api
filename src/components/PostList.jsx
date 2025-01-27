// PostsList.jsx
import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

const PostsList = () => {
  const { posts } = useContext(PostsContext);

  return (
    <div className="container">
      <ul className="mt-4 space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow-md">
            <h2 className="font-bold text-primary">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
