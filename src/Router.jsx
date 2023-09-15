import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
import ShoppingPage from './pages/ShoppingPage';
import PropTypes from 'prop-types'


function Router ({productArr, error, loading, cartArr, setCartArr}) {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
            errorElement: <ErrorPage />
        },
        {
            path: '/about',
            element: <AboutPage />,
        },
        {
            path: '/cart',
            element: <CartPage cartArr={cartArr} setCartArr={setCartArr} />,
        },
        {
            path: '/store',
            element: <ShoppingPage productArr={productArr} error={error} loading={loading} setCartArr={setCartArr} cartArr={cartArr} />,
        }

    ]);

    return <RouterProvider router={router} />
}

Router.propTypes = {
    productArr: PropTypes.array,
    error: PropTypes.any,
    loading: PropTypes.bool,
    cartArr: PropTypes.array,
    setCartArr: PropTypes.func,
  }

export default Router;