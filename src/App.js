// import logo from './logo.svg';
import Welcome from './Screens/Welcome/Welcome';
import MixedType from './Components/MixedType/MixedType';
import YesNo from './Components/YesNo/YesNo';
import OpenEnded from './Components/OpenEnded/OpenEnded';

function App() {
  return (
    <div className="App">
      <MixedType/>
      <YesNo/>
      <OpenEnded/>
      <Welcome/>
    </div>
  );
}

export default App;
