import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, useParams, unstable_HistoryRouter } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './PublicBar/Pages/HomePage/Home';
import Services from './PublicBar/Pages/ServicesPage/Services';
import BrowseProjects from './PublicBar/Pages/BrowseProjectsPage/BrowseProjects';
import BrowseEmployees from './PublicBar/Pages/BrowseEmployeesPage/BrowseEmployees';
import Blog from './PublicBar/Pages/BlogPage/Blog';
import ContactUs from './PublicBar/Pages/ContactUsPage/ContactUs';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App ">
      <div className='Main-Wrapper'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/"
            element={
              <Home />
            }
          />
          <Route path="/services"
            element={
              <Services />
            }
          />
          <Route path="/browse-projects"
            element={
              <BrowseProjects />
            }
          />
          <Route path="/browse-employees"
            element={
              <BrowseEmployees />
            }
          />
          <Route path="/blogs"
            element={
              <Blog />
            }
          />
          <Route path="/contact-us"
            element={
              <ContactUs />
            }
          />

        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
