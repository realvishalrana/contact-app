import { useEffect } from 'react';

// import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

// import Loader from './components/spinner/Spinner';
import { contactRoutes, routes } from './routes';
import { fetchContent } from './store/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { user, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  return loading ? (
    <div className="myLoader">
                  <span className="spinner-border spinner-border-sm mr-1"></span>
    </div>
  ) : (
    <RouterProvider router={user ? contactRoutes : routes}></RouterProvider>
  );
}

export default App;
