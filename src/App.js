// import logo from './logo.svg';
import Welcome from './Screens/Welcome/Welcome';
import YesNo from './DynamicComponents/YesNo/YesNo';
import OpenEnded from './DynamicComponents/OpenEnded/OpenEnded';
// import MixedType from './DynamicComponents/MixedType/MixedType';

function App() {
  return (
    <div className="App">
      {/* <MixedType/> */}
      <YesNo/>
      <OpenEnded/>
      <Welcome/>
    </div>
  );
}

export default App;
