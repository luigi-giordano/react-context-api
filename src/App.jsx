import { PostsProvider } from "./context/PostsContext";
import PostsPage from "./components/PostPage";
import PostsList from "./components/PostList";

const App = () => {
  return (
    <PostsProvider>
      <PostsPage />
      <PostsList />
    </PostsProvider>
  );
};

export default App;