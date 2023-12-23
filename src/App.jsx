
import './App.css'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Boats, {loader as boatsLoader} from './pages/boats/Boats'
import SelectedBoat, {loader as selectedBoatLoader} from './pages/boats/SelectedBoat'
import Dashboard,{ loader as dashboardLoader} from './pages/merchant/Dashboard'
import Income, {loader as incomeLoader} from './pages/merchant/Income'
import MerchantBoats, {loader as merchantBoatsLoader} from './pages/merchant/MerchantBoats'
import Reviews, {loader as reviewsLoader} from './pages/merchant/Reviews'
import Layout from './components/Layout'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import MerchantLayout from './components/MerchantLayout'
import MerchantBoatDetails, {loader as merchantBoatDetailsLoader} from './pages/merchant/MerchantBoatDetails'
import SelectedMerchantBoatDetails from './components/SelectedMerchantBoatDetails'
import SelectedMerchantBoatPricing from './components/SelectedMerchantBoatPricing'
import SelectedMerchantBoatPhotos from './components/SelectedMerchantBoatPhotos'

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>
     <Route path='/' element={<Layout/>}>
        <Route index  element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='boats' loader={boatsLoader} element={<Boats/>}/>
        <Route path='boats/:id' loader={selectedBoatLoader} element={<SelectedBoat/>}/>
        <Route path='merchant' element={<MerchantLayout/>}>
          <Route index loader={dashboardLoader}  element={<Dashboard/>}/>
          <Route path='income' loader={incomeLoader}  element={<Income/>}/>
          <Route path='boats' loader={merchantBoatsLoader} element={<MerchantBoats/>}/>
          <Route path='boats/:id' loader={merchantBoatDetailsLoader} element={<MerchantBoatDetails/>}>
            <Route index element={<SelectedMerchantBoatDetails/>}/>
            <Route path='pricing' element={<SelectedMerchantBoatPricing/>}/>
            <Route path='photos'  element={<SelectedMerchantBoatPhotos/>}/>
          </Route>
          <Route path='reviews' loader={reviewsLoader}  element={<Reviews/>}/>
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
     </Route>
    </>
  ))

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
