import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Manicontainer from './components/Maincontainer';
import Watchpage from './components/Watchpage';
import Courses from './components/Courses';
import Sports from './components/Sports';
import SportsDetails from './components/SportsDetails';
function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element : <Body/>,
    children : [{
      path: "/",
      element : <Manicontainer/>
    },{
      path : "/watchpage",
      element : <Watchpage/> 
    },{
      path:"/courses",
      element : <Courses/>
    },{
      path: "/sports",
      element : <Sports/>
  },
    {
    path: "/sports/:id",
    element: <SportsDetails />
  }
  
  ]
  }])
  return (
   
    <div>
       <Provider store ={store}>
       <Head/>
       <RouterProvider router = {appRouter}/>
        </Provider> 
    </div>

  );
}

export default App;
