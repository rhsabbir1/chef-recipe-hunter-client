import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Main from '../layout/Main';
import Chif from '../pages/Chif';
import ViewRecipes from '../pages/ViewRecipes';

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
          {
            path: '/',
            element :<Chif></Chif>,
          }
          ,
          {
            path:'/:id',
            element:<ViewRecipes></ViewRecipes>,
            loader: ({params})=> fetch(`https://chif-recipy-server-side.vercel.app/chef/${params.id}`)
          }
      ]
    }
])

export default router;