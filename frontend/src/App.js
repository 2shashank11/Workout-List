import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'

//pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <div className='pages'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
