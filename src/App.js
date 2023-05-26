import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import About from './components/About/About'
import { productsAndCartLoader } from './loaders/productsAndCartLoader'
import SignIn from './components/SignIn/SignIn';
import Signup from './components/SignUp/Signup';
import { RequireAuth } from './RequireAuth';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: productsAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: 'home',
          loader: productsAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productsAndCartLoader,
          element: <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'signin',
          element: <SignIn></SignIn>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
