import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/home-page'
import AboutUs from './pages/about-us'
import ServicesPage from './pages/services-page'
import ContactUs from './pages/contact-us'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='pages/about-us' Component={AboutUs}/>
            <Route path='pages/services-page' Component={ServicesPage}/>
            <Route path='pages/contact-us' Component={ContactUs}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
