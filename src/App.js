import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Welcome from './Screens/Welcome/Welcome';
import User from './Screens/User/User';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Home from './Screens/Admin/Home/Home';
import Question from './Screens/Admin/Question/Question';


// import './styles/Colors.scss';
function App() {
  return (
    
    <div>
      <div className="content">
        <Header/>
        <Home/>
        <User/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;