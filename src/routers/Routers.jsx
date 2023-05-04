import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Main from '../layout/Main';
import Chif from '../pages/Chif';
import ViewRecipes from '../pages/ViewRecipes';
import Login from '../shared/form/Login';
import Registration from '../shared/form/Registration';
import PrivateRoute from './PrivateRoute';
import Errorpage from '../pages/Errorpage';
import Blog from '../pages/Blogs/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Chif></Chif>,
      }
      ,
      {
        path: '/:id',
        element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chif-recipy-server-side.vercel.app/chef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/blog',
        element :<Blog></Blog> 
      }
    ]
  }
])

export default router;