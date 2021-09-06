import Welcome from './Screens/Welcome/Welcome';
import User from './Screens/User/User';
import Home from './Screens/Admin/Home/Home';
import Question from './Screens/Admin/Question/Question';

// import './styles/Colors.scss';
function App() {
  return (
    <div className="content">
      <Home/>
      {/* <Question/> */}
      <User/>
    </div>
  );
}

export default App;