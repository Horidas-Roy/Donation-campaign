import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './Layout/LayOut';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import TotalDonation from './pages/TotalDonation';
import DonationCardDetails from './Components/DonationCardDetails/DonationCardDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/donation.json')
      },
      {
        path:'/donation',
        element:<TotalDonation></TotalDonation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
          path:'/donationcarddetails/:id',
          element:<DonationCardDetails></DonationCardDetails>,
          loader:()=>fetch('/donation.json')
      },
      {
         path:'/donation/:id',
         element:<DonationCardDetails></DonationCardDetails>,
         loader:()=>fetch('/donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
