
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Tshirts from './components/Tshirts/Tshirts';
import About from './components/About/About';
import Main from './Main/Main';
import GrandFather from './components/props-drilling/GrandFather/GrandFather';
import GrandFather2 from './components/ContextAPI/GrandFather/GrandFather2';
import Review from './components/Review/Review';
import { productAndCart } from './components/Loaders/Loaders';
function App() {
const router = createBrowserRouter([
{
  path:"/" , element: <Main> </Main>   , children:[
    {
      path:"/" , 
      loader: async () => fetch("tshirts.json") 
      , element : <Tshirts></Tshirts>
    } ,

    {
      path:"/about" , element : <About></About>
    } ,
    {
    path:"/props-drilling" , element : <GrandFather></GrandFather>
    } ,
    {
      path:"/context-api" , element : <GrandFather2></GrandFather2>
      } ,
      {
        path:"/review" , 
        loader: productAndCart
        ,element :<Review></Review>
        } ,
  ] 
}
])
  return (
    <div className="main-app">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
