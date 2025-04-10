import "./App.scss";
import Excomponent from "./exam/Excomponent";
import Excount from "./exam/Excount";
import Excolor from "./exam/Excolor";
import Todoapp from "./exam/todoapp";
let App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Todoapp />
        <hr></hr>
        <Excomponent />
        {/* event  */}
        <hr></hr>
        <Excount />
        {/* state */}
        <hr></hr>
        <Excolor />
      </header>
    </div>
  );
};

export default App;
