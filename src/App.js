
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import Layout from './Common/Layout/Layout'
import Welcome from './Screens/Welcome/Welcome';
import User from './Screens/User/User';
import Home from './Screens/Admin/Home/Home';
import Email from './Screens/Admin/Email/Email';
import Question from './Screens/Admin/Question/Question';
import Sendmail from './Components/EmailJs/sendmail';


// import './styles/Colors.scss';
function App() {
  return (
    <div className="content">
      <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/qns" element={<Question/>} />
        <Route exact path="/user" element={<User/>} />        
        <Route exact path="/welcome" element={<Welcome/>} />
        <Route exact path="/sendemail" element={<Sendmail/>} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;