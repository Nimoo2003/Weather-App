import hotBg from "./assets/sunny.jpg"
import coldBg from "./assets/cold/jpg"
function App() {
  return (
    <div className="app" style={{backgroundImage:`url($(coldBg))`}}>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
