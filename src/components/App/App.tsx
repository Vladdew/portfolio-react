import Content from "../Content/Content";
import "normalize.css";

function App() {
  console.log("App red");
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
