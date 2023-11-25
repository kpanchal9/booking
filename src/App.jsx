import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/list/List";
import Hotels from "./pages/hotel/Hotels";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotels/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
