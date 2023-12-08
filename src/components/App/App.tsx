import Content from "../Content/Content";
import Heft from "../Content/view/Heft/Heft";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <div className="flex-wrap">
        <div className="pen" />
        <div className="cup" />
        <div className="iphone" />
        <Heft />
        <Content />
      </div>
    </div>
  );
}

export default App;
