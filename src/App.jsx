
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import AnimalSearch from './Components/AnimalSearch/SearchResults';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AnimalSearch/>,
    },
  ]); 

  return (
    <>
     {/* Alert container*/}
     <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
      />
      <RouterProvider router={router} />
    </>
  )
}

export default App
