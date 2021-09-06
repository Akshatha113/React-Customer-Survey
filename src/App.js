import Welcome from './Screens/Welcome/Welcome';
import User from './Screens/User/User';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

// import './styles/Colors.scss';
function App() {
  return (
    <div>
      <div className="content">
        <Header/>
        <User/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;