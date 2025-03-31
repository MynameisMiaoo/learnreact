import "./App.scss";
import Excomponent from "./exam/excomponent";
import Excount from "./exam/Excount";
import Excolor from "./exam/Excolor";
let App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Excomponent />
        <Excount />
        <Excolor />
      </header>
    </div>
  );
};

export default App;
