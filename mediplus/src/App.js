import logo from './logo.svg';
import './App.css';

import Home from './DocApp/Home';
import Contact from './DocApp/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './DocApp/Blog';
import Appointment from './DocApp/appointment';
import Login from './DocApp/Login';
import Registration from './DocApp/Registration';
import Medicine from './DocApp/medicine';
import FindDoctor from './DocApp/Doctors';
import Laboratory from './DocApp/Laboratory';
import Services from './DocApp/services';
import Cart from './DocApp/cart';
import Payment from './DocApp/payment';
import MyAppointments from './DocApp/userAppoinments';
import VideoCall from './DocApp/VideoCall';
import UserProfile from './DocApp/UserProfile';
import ForgotPassword from './DocApp/ForgotPassword';
import ResetPassword from './DocApp/ResetPassword';


function App() {
  return (
    // <div className="App">
    //  <Home/>
    //  <Contact/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact></Contact>}/>
      <Route path="/blog" element={<Blog></Blog>}/>
      <Route path="/doctors" element={<FindDoctor></FindDoctor>}/>
      <Route path="/appointment" element={<Appointment></Appointment>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/registration" element={<Registration></Registration>}/>
      <Route path="/medicine" element={<Medicine></Medicine>}/>
      <Route path="/laboratory" element={<Laboratory></Laboratory>}/>
      <Route path="/services" element={<Services></Services>}/>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/payment" element={<Payment></Payment>}></Route>
      <Route path="/userAppoinments" element={<MyAppointments></MyAppointments>}></Route>
      <Route path="/videoCall" element={<VideoCall></VideoCall>}></Route>
      <Route path="/userProfile" element={<UserProfile></UserProfile>}></Route>
      <Route path="/forgotpassword" element={<ForgotPassword></ForgotPassword>}></Route>
      <Route path="/reset-password/:token" element={<ResetPassword></ResetPassword>}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App; 