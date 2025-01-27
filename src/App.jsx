import { PostsProvider } from "./context/PostsContext";
import PostsPage from "./components/PostsPage";
import PostsList from "./components/PostList";


const posts = [
  { id: 1, title: 'Post 1', content: 'This is the content of post 1' },
  { id: 2, title: 'Post 2', content: 'This is the content of post 2' },
  { id: 3, title: 'Post 3', content: 'This is the content of post 3' },
];

const App = () => {
  return (
    <PostsProvider>
      <PostsPage />
      <PostsList />
    </PostsProvider>
  );
};

export default App;