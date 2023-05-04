import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Main from '../layout/Main';
import Chif from '../pages/Chif';
import ViewRecipes from '../pages/ViewRecipes';
import Login from '../shared/form/Login';
import Registration from '../shared/form/Registration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Chif></Chif>,
      }
      ,
      {
        path: '/:id',
        element: <ViewRecipes></ViewRecipes>,
        loader: ({ params }) => fetch(`https://chif-recipy-server-side.vercel.app/chef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      }
    ]
  }
])

export default router;