import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import New from "./components/New";
import View from "./components/View";
import Edit from "./components/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/posts/new" element={<New />} />
        <Route path="/posts/:postId" element={<View />} />
        <Route path="/edit/:postId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
