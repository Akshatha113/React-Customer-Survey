// import logo from './logo.svg';
import Welcome from './Screens/Welcome/Welcome';
// import MixedType from './Components/MixedType/MixedType';
import YesNo from './Components/YesNo/YesNo';
import OpenEnded from './Components/OpenEnded/OpenEnded';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Rating from './Components/RatingScale/RatingScale';
import Ranking from './Components/Ranking/Ranking';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MixedType/> */}
      <YesNo/>
      <OpenEnded/>
      <Rating/>
      <Ranking/>
      <Welcome/>
      <Footer/>
    </div>
  );
}

export default App;
