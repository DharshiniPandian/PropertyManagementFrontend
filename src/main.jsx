import { ThemeProvider } from "@mui/material";
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material';
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import theme from './Theme.jsx'
import { store } from "./store/store.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Company from "./pages/Company.jsx";
import { Provider } from "react-redux";

const router = createBrowserRouter(   //uses the DOM History API to update the URL and manage the history stack
  createRoutesFromElements( //createRoutesFromElements is a helper that creates route objects from <Route> elements. It's useful if you prefer to create your routes as JSX instead of objects.
    <Route path='/' element={<App />}>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='company' element={<Company />} >
        {/* <Route path=':userid' element={<User />} /> */}
      </Route>
      {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} /> */}
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
      <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
  </ThemeProvider>

)
