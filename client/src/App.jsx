import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>{/* <Route path="/" element={<div>Home</div>} /> */}</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
