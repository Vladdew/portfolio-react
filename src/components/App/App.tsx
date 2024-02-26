import Content from "../Content/Content";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <div className="flex-wrap">
        <div className="pen" />
        <div className="cup" />
        <div className="iphone" />
        <Content />
      </div>
    </div>
  );
}

export default App;
