import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Header';
import Footer from './Footer';
import Index from './Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import InventoryDetails from './InventoryDetails';
import ECommerceDetails from "./EcommerceDetails";
import JobPortalDetails from "./JobPortalDetails";
import AdminDashboardDetails from './AdminDashboardDetails';
import CustomCRMDetails from './CustomCRMDetails';
import BlogCMSDetails from './BlogCMSDetails';
import Contact from './Contact';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/e-commerce-detail' element={<ECommerceDetails />} />
          <Route path='/job-portal-detail' element={<JobPortalDetails />} />
          <Route path='/admin-dashboard-details' element={<AdminDashboardDetails />} />
          <Route path='/custom-crm-details' element={<CustomCRMDetails />} />
          <Route path='/blog-cms-details' element={<BlogCMSDetails />} />
          <Route path='/inventory-detail' element={<InventoryDetails />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
