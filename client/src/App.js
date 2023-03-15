import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Files/Home/Home";
import Footer from "./Component/Footer/Footer";
import Blog from "./Component/Files/Blog/Blog";
import Faq from "./Component/Files/Qna/Faq";
import Featcure from "./Component/Files/featcure/Featcure";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/features" element={<Featcure />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
