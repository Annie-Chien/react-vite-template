/** Router */
import router from './router';
import { RouterProvider } from 'react-router-dom';
/** Style */
import './App.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
