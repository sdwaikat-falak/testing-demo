import {RouterProvider} from 'react-router'
import {routes} from "./Routes/routes.tsx";
import '@progress/kendo-theme-default/dist/all.css';

function App() {

  return (
      <>
        <RouterProvider router={routes} />
      </>
  )
}

export default App
