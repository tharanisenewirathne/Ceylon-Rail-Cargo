import logo from './logo.svg';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import DownloadsPage from './Pages/DownloadsPage';
import Login from './Pages/Login';
import ContactusPage from './Pages/ContactusPage';
import AdminDashboard from './Pages/AdminDashboard';
import AdminOrderDetails from './Pages/AdminOrderDetails';
import AdminTrackOrders from './Pages/AdminTrackOrders';
import AdminDownloads from './Pages/AdminDownloads';
import AdminInsertPackage from './Pages/AdminInsertPackage';
import AdminReports from './Pages/AdminReports';
import AdminReceivedPackage from './Pages/AdminReceivedPackage';
import AdminCustomerFeedback from './Pages/AdminCustomerFeedback';
import UserTrackingPage from './Pages/UserTrackingPage';




function App() {
  return (
    <div className="App ">
    <BrowserRouter>
         <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/DownloadsPage' element={<DownloadsPage/>} />
          <Route exact path='/Home' element={<Home/>} />
          <Route exact path='/ContactusPage' element={<ContactusPage/>} />
          <Route exact path='/Login' element={<Login/>} />
          <Route exact path='/AdminDashboard' element={<AdminDashboard/>} />
          <Route exact path='/AdminInsertPackage' element={<AdminInsertPackage/>} />
          <Route exact path='/AdminReceivedPackage' element={<AdminReceivedPackage/>} />
          <Route exact path='/AdminOrderDetails' element={<AdminOrderDetails/>} />
          <Route exact path='/AdminTrackOrders' element={<AdminTrackOrders/>} />
          <Route exact path='/AdminDownloads' element={<AdminDownloads/>} />
          <Route exact path='/AdminReports' element={<AdminReports/>} />
          <Route exact path='/AdminCustomerFeedback' element={<AdminCustomerFeedback/>} />
          <Route exact path='/UserTrackingPage' element={<UserTrackingPage/>} />
         </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
